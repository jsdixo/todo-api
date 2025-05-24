pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Building the app...'
        bt 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
        bt 'npm test'
      }
    }
  }
}
