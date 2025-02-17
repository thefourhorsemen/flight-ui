pipeline {
  agent any
  environment {
    ORG = 'thefourhorsemen'
    APP_NAME = 'flight-ui'
    CHARTMUSEUM_CREDS = credentials('jenkins-x-chartmuseum')
    DOCKER_REGISTRY_ORG = 'thefourhorsemen'
  }
  stages {
    stage('CI Build and push snapshot') {
      when {
        branch 'feature-*'
      }
      environment {
        PREVIEW_VERSION = "0.0.0-SNAPSHOT-$BRANCH_NAME-$BUILD_NUMBER"
        PREVIEW_NAMESPACE = "$APP_NAME-$BRANCH_NAME".toLowerCase()
        HELM_RELEASE = "$PREVIEW_NAMESPACE".toLowerCase()
      }
      steps {
        container('jenkinsxio/jx:2.0.119')
        sh "npm install"
        sh "CI=true DISPLAY=:99 npm test"
        sh "export VERSION=$PREVIEW_VERSION && skaffold build -f skaffold.yaml"
        sh "jx step post build --image $DOCKER_REGISTRY/$ORG/$APP_NAME:$PREVIEW_VERSION"
        dir('./charts/preview') {
          sh "make preview"
          sh "jx preview --app $APP_NAME --dir ../.."
        }
      }
    }
    stage('Build Release') {
      when {
        branch 'master'
      }
      steps {
        git 'https://github.com/thefourhorsemen/flight-ui.git'

        // so we can retrieve the version in later steps
        sh "echo \$(jx-release-version) > VERSION"
        sh "jx step tag --version \$(cat VERSION)"
        container('jenkinsxio/jx:2.0.119')
        sh "npm install"
        sh "CI=true DISPLAY=:99 npm test"
        sh "export VERSION=`cat VERSION` && skaffold build -f skaffold.yaml"
        sh "jx step post build --image $DOCKER_REGISTRY/$ORG/$APP_NAME:\$(cat VERSION)"
      }
    }
    stage('Promote to Environments') {
      when {
        branch 'master'
      }
      steps {
        dir('./charts/flight-ui') {
          sh "jx step changelog --batch-mode --version v\$(cat ../../VERSION)"

          // release the helm chart
          sh "jx step helm release"

          // promote through all 'Auto' promotion Environments
          sh "jx promote -b --all-auto --timeout 1h --version \$(cat ../../VERSION)"
        }
      }
    }
  }
}
