pipeline {
    agent any

    tools { nodejs "node" }

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                // cada stage es una maquina que se va a disparar
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/karymerivera52/Cypress_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key f24f5784-8ad4-49b2-8b4b-4feef5f32f33  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/karymerivera52/Cypress_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key f24f5784-8ad4-49b2-8b4b-4feef5f32f33  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/karymerivera52/Cypress_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key f24f5784-8ad4-49b2-8b4b-4feef5f32f33  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/karymerivera52/Cypress_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key f24f5784-8ad4-49b2-8b4b-4feef5f32f33  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}