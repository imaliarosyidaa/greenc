import{_ as x,c as u,a as e,b as p,w as m,r as w,d as b,e as v,f as g,v as f,t as y,g as a,h as k,o as c,i as h}from"./index-scct9QEi.js";const _={data(){return{email:"",password:"",error:null}},methods:{async login(){var t,i;const l=new FormData;l.append("email",this.email),l.append("password",this.password);try{const s=await k.post("/login",l,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!1}),o=(t=s==null?void 0:s.data)==null?void 0:t.token,r=(i=s==null?void 0:s.data)==null?void 0:i.user;localStorage.setItem("token",JSON.stringify(o)),localStorage.setItem("userInfo",JSON.stringify(r)),this.$root.user=r,this.$router.push("/")}catch{this.error="Login gagal, periksa email dan password!"}}}},S={class:"grid grid-cols-1 md:grid-cols-2 h-screen"},D={class:"h-full relative hero hidden md:block"},I={class:"overlap-group"},L={class:"group"},N={class:"absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col p-12"},V={class:"flex items-center justify-center p-12"},B={class:"w-full max-w-md"},C={class:"pb-4"},T={class:"pb-4"},A={key:0,class:"text-red-500 mt-2"};function E(l,t,i,s,o,r){const d=w("RouterLink");return c(),u("div",S,[e("div",D,[e("div",I,[e("div",L,[t[5]||(t[5]=e("div",{class:"rectangle"},null,-1)),e("div",N,[p(d,{to:"/"},{default:m(()=>t[3]||(t[3]=[e("img",{src:h,alt:"Logo",class:"w-40 pb-8"},null,-1)])),_:1}),t[4]||(t[4]=e("h1",{class:"text-[#FAE084] text-2xl font-bold"}," Bersama Lestarikan Lingkungan dengan mengurangi konsumsi fesyen ",-1))])])])]),e("div",V,[e("div",B,[t[10]||(t[10]=e("h2",{class:"text-2xl font-bold pb-6 text-center"},"Sign in",-1)),e("form",{onSubmit:t[2]||(t[2]=b((...n)=>r.login&&r.login(...n),["prevent"]))},[e("div",C,[t[6]||(t[6]=e("label",{class:"block text-gray-700 font-medium"},"Email",-1)),g(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.email=n),type:"email",class:"w-full p-3 border rounded",required:""},null,512),[[f,o.email]])]),e("div",T,[t[7]||(t[7]=e("label",{class:"block text-gray-700 font-medium"},"Password",-1)),g(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o.password=n),type:"password",class:"w-full p-3 border rounded",required:"",minlength:"6"},null,512),[[f,o.password]])]),t[8]||(t[8]=e("button",{type:"submit",class:"w-full bg-[#DAA520] text-white py-3 rounded cursor-pointer"}," Sign In ",-1)),o.error?(c(),u("p",A,y(o.error),1)):v("",!0)],32),p(d,{to:"/signup"},{default:m(()=>t[9]||(t[9]=[e("p",{class:"text-center text-sm pt-4"},[a(" Belum buat akun? "),e("a",{href:"#",class:"text-blue-600"},"Sign Up")],-1)])),_:1}),t[11]||(t[11]=e("p",{class:"text-center text-xs text-gray-500 pt-2"},[a(" Dengan signin ke Greenc, anda setuju dengan "),e("a",{href:"#",class:"underline"},"Terms"),a(" dan "),e("a",{href:"#",class:"underline"},"Privacy Policy"),a(". ")],-1))])])])}const U=x(_,[["render",E],["__scopeId","data-v-fad0a08e"]]);export{U as default};
