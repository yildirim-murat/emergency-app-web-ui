pipeline {
  agent any

  environment {
    GITHUB_TOKEN = credentials('GithubToken')
  }

  stages {
    stage("Verify Tooling") {
      steps {
        sh 'docker info'
      }
    }

    stage('Prune Docker data') {
      steps {
        sh 'docker system prune -a --volumes -f'
      }
    }

    stage('Clone Repository and Run Docker'){
      steps {
        sh 'rm -rf c_data_generator'
        sh 'git clone https://${GITHUB_TOKEN}@github.com/yildirim-murat/ecc-dummy-data-generator && cd ecc-dummy-data-generator && docker build -t c_data_generator .'
        sh 'cd ..'
        sh 'rm -rf listening-and-reporting-webui-ms'
        sh 'git clone https://${GITHUB_TOKEN}@github.com/yildirim-murat/listening-and-reporting-webui-ms.git && cd listening-and-reporting-webui-ms && docker build -t c_web-ui-ms .'
      }
    }

    stage('Start container') {
      steps {
        sh 'docker compose up -d --no-color --wait'
        sh 'docker compose ps'
      }
    }
  }

  post {
    always {echo 'CI/CD Pipeline Operations have been discontinued.'}
    success { echo 'CI/CD pipeline ran successfully!' }
    failure { echo 'CI/CD pipeline failed!' }
  }
}