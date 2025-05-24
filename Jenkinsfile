pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Building the app...'
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
        sh 'npm test'
      }
    }
  }
}
