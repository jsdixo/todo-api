pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Building the app...'
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
        bat 'npm test'
      }
    }
    stage('Code Quality') {
  steps {
    echo 'Running JSHint for code quality analysis...'
    bat 'npm run lint'
  }
}

  }
}
