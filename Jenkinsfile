pipeline {
    agent none 
    environment {
        docker_user = "C_Uhlin"
    }
    stages {
        stage('Publish') {
            agent {
                kubernetes {
                    inheritFrom 'agent-template'
                }
            }
            steps{
                container('docker') {
                    sh 'echo $DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
                    sh 'cd backend; docker build -t $DOCKER_USER/backend:$BUILD_NUMBER .'
                    sh 'docker push $DOCKER_USER/backend:$BUILD_NUMBER'
                }
            }
        }
        stage ('Deploy') {
            agent {
                node {
                    label 'deploy'
                }
            }
            steps {
                sshagent(credentials: ['cloudlab']) {
                    sh "sed -i 's/DOCKER_REGISTRY/${docker_user}/g' backend.yaml"
                    sh "sed -i 's/BUILD_NUMBER/${BUILD_NUMBER}/g' backend.yaml"
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yaml C_Uhlin@pcvm494-1.emulab.net:~/'
                    sh 'ssh -o StrictHostKeyChecking=no C_Uhlin@pcvm494-1.emulab.net kubectl apply -f /users/CU903525/backend.yaml -n jenkins'
                    sh 'ssh -o StrictHostKeyChecking=no C_Uhlin@pcvm494-1.emulab.net kubectl apply -f /users/CU903525/backend-service.yaml -n jenkins'                                        
                }
            }
        }
    }
}
