pipeline {
  agent any
  stages {
      stage('') {
          steps {
              bat 'inspectcode RecruitmentPortal.sln --output=test.xml'
          }
      }
      stage('npm install') {
          steps {
              bat 'npm i'
          }
      }
      stage('Deliver') {
          steps {
              sh 'yarn build-storybook'
              sh 'cp -Rf build/. /var/www/adac-camping-dev/'
          }
      }
  }
}
