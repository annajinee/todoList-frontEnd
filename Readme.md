
##  Todo List FrontEnd   
​  
  
  
  
  
  
  
  
  
Backend API로 proxy 요청함으로 todoList-Backend 프로젝트 (https://github.com/annajinee/todoList-backEnd)와 함께 실행 부탁드립니다. <br>  
  
*( proxy.config.json 파일 내 "target": "http://localhost:8080"로 데이터 요청합니다. )*  
<br>  
  

#### Angular-CLI(Command Line Interface)

 Angular CLI 는 Node.js 4.9 버전 이상이 요구되기 때문에 이전에 Node.js를 설치하셨다면 `node -v` 로 버전 확인 부탁드립니다. 
 만약 Node.js가 설치 되어 있지 않다면 [https://nodejs.org](https://nodejs.org/)[](https://nodejs.org/) 에서 다운받을 수 있습니다. 
 <br>
Node.js/NPM을 설치한 후 terminal에서 아래의 명령어를 입력하여 설치합니다.

    npm install -g @angular/cli



<br>프로젝트 실행 명령어는 아래와 같습니다.   
  
     
     ng serve --proxy-config ./proxy.config.json

  ( todoList-frontEnd/ 폴더 내 에서 명령어 입력 )          
<br>  
#### 실행 주소   
  
 http://localhost:4200

위 링크로 실행 화면 확인 가능합니다. 