
##  Todo List FrontEnd   
​  
  
  
  
  
  
  
  
  
#### Backend API로 proxy 설정
 [todoList-Backend](https://github.com/annajinee/todoList-backEnd) 프로젝트와 함께 실행 합니다.
  

*( 데이터 요청 시 proxy.config.json 파일 내 "target": "http://localhost:8080"로 요청하고 있습니다. )* 

 
<br>  
  

#### Angular-CLI(Command Line Interface)

 Angular CLI 는 Node.js 4.9 버전 이상이 요구되기 때문에 이전에 Node.js를 설치하셨다면 `node -v` 로 버전 확인 후 이하 버전일 경우 업데이트 합니다.
 만약 Node.js가 설치 되어 있지 않다면 [https://nodejs.org](https://nodejs.org/)[](https://nodejs.org/) 에서 다운받을 수 있습니다. 
 <br>
Node.js/NPM을 설치한 후 terminal에서 아래의 명령어를 입력하여 설치합니다.

    npm install -g @angular/cli

angular cli 설치 후 필요한 node modules 가져오기 위하여 아래 명령어를 입력합니다. 

    npm install


<br>프로젝트 실행 명령어는 아래와 같습니다.
 (angular cli내 todoList-frontEnd/ 위치에서 입력)  
  
     
     ng serve --proxy-config ./proxy.config.json

      
      
<br>  

#### 실행 주소   
  
 http://localhost:4200

위 링크로 실행 화면 확인 가능합니다. 
<br>
<br>
## 실행 화면 설명

### 1. 메뉴 화면

<img src="http://drive.google.com/uc?export=view&id=1lcuvYchTUzY3lb6t5JEjH96vIP7LjpiR" style width="750"/>

###  2. 할 일 추가

상단 '할 일 추가하기' 탭을 눌러 추가 할 일을 입력합니다.
<img src="http://drive.google.com/uc?export=view&id=1spsAgVXYVj6eJei05OGKCq4W_RcqqKAA" style width="750"/>

<img src="http://drive.google.com/uc?export=view&id=19XVlaFCip-EGEOYErMMVI1aqMtGpBfcm" style width="750"/>

id : 20 번으로 등록 완료
<img src="http://drive.google.com/uc?export=view&id=1yDVgME92TVaBQdfDEeTarRzO21lE-P6a" style width="750"/>

<br>

### 3. 할 일 조회 및 수정

수정할 데이터의 row를 클릭하여 데이터 조회 및 할 일 수정이 가능합니다.
<img src="http://drive.google.com/uc?export=view&id=1VsnJBUsWQjm2kFwJlf6gjW444UHbG9CH" style width="750"/>

<img src="http://drive.google.com/uc?export=view&id=1sKF6av1dmYTLX7kAbt6ZFnHpMnb7bMdc" style width="750"/>

id: 20 수정 완료 <br>
<img src ="http://drive.google.com/uc?export=view&id=1NX5Y0I5tJE1v5Md_noQrHhryD0u_y_Yz" style width="750"/>

### 4. 할 일 완료 처리

id: 20 번 데이터를 완료 처리
( 참조된 5,6 번 일이 완료되어 완료 처리 가능 )
<img src="http://drive.google.com/uc?export=view&id=1MLfEW4SfsHc0gisfMwkn4LH0fN_vwnv7" style width="750"/>

id: 2 번 데이터를 완료처리
( 참조된 1번 일이 완료되지 않아 완료 처리 불가능)
<img src="http://drive.google.com/uc?export=view&id=18sCHn3F9M5D-S2wBPGaUzC3DFerYwIRm" style width="750"/>
