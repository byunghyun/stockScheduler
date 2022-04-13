## 주요 사용기술 
- [React], [Next.js], [TailwindCSS], [Typescript], [supabase], [lodash], [Immer]

## 프로젝트 설명
- **_components 구조_**
- **_atoms_**: 단순히 나눈다의 개념이 아닌 디자인 시스템으로 재활용 할 수 있는 것 중에서의 최소 단위입니다.
- **_molecules_**: 단순히 나눈다의 개념이 아닌 디자인 시스템으로 재활용 할 수 있는 것 중에서 atoms보다 큰 개념입니다.
- **_organisms_**: _molecules_보다 큰 개념의 디자인 시스템
- **_templates_**: 페이지의 골격
- **_layout_**: layout high order compoent로 구성되어있는 layout compoenet입니다.

프로젝트 개요
- 대충보면 얘 라이브러리로 떡칠해놨네라고 보실 수도 있지만 input, button만 라이브러리를 사용하였고
  테이블이나 다른 모든 것은 직접 라이브러리처럼 만들어놓은 것입니다.
- view에서는 view와 view controll이 같이 있을 수 있지만 쿼리를 날리는 부분은 확실하게 별도로 구분하였습니다.
- 재사용의 여지가 많은 기능은 util 혹은 service로 분류하였습니다.
- service는 db 연결부 혹은 차후 문자관련된 주요 기능들이 들어갑니다.
- util에는 기타 부수적인 고통 기능들이 들어갑니다. 

```
### 기타 주요 폴더 구조
📦DTO
 ┣ 📂productObjectDTO
 ┃ ┣ 📜productObjectDTO.ts

📦DAO
 ┣ 📂auth
 ┃ ┣ 📜login.ts
 ┃ ┗ 📜logout.ts
 ┣ 📂productList 
 ┃ ┣ 📜RealTimeProductList.ts // 소켓 통신 사용 시
 ┃ ┣ 📜addProductObject.ts // 상품 추가 쿼리
 ┃ ┣ 📜deleteProductObject.ts // 상품 삭제 쿼리
 ┃ ┣ 📜getProductList.ts // 상품 한번만 가져오는 쿼리
 ┃ ┗ 📜updateProductObject.ts // 상품 수정 쿼리

📦entries
 ┃ 📜index.ts // 각종 엔트리 파일 모음
 
📦util
 ┃ 📜AlertToast.ts // 토스트 호출 class
 ┃ 📜ConvertClassToPlain.ts // plain Class로 바꿔주는 class
 
📦service
 ┃ 📜initializeSuapbase.ts // supabase 실행용
 
📦zustand
 ┃ 📜dashboard
 ┃ 📜productList
```
