import{_ as p,c as g,a as e,b as d,w as u,r as f,d as w,f as o,v as l,g as n,h as b,o as x,i as c}from"./index-uBS7zzzi.js";const v={data(){return{name:"",email:"",password:"",confirm_password:"",errorMessage:""}},methods:{async register(){try{if(this.password!==this.confirm_password){this.errorMessage="Password dan Konfirmasi Password tidak cocok!";return}this.errorMessage="",await b.post("/register",{name:this.name,email:this.email,password:this.password}),this.$router.push("/signin")}catch{this.error="Login gagal, periksa email dan password!"}}}},k={class:"grid grid-cols-1 md:grid-cols-2 h-screen"},y={class:"h-full relative hero hidden md:block"},h={class:"overlap-group"},_={class:"group"},L={class:"absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col p-12"},V={class:"flex items-center justify-center p-12"},P={class:"w-full max-w-md"},B={class:"mb-4"},M={class:"mb-4"},S={class:"mb-4 grid grid-cols-1 md:grid-cols-2 gap-4"};function U(m,s,q,A,r,i){const a=f("RouterLink");return x(),g("div",k,[e("div",y,[e("div",h,[e("div",_,[s[7]||(s[7]=e("div",{class:"rectangle"},null,-1)),e("div",L,[d(a,{to:"/"},{default:u(()=>s[5]||(s[5]=[e("img",{src:c,alt:"Logo",class:"w-40 pb-8"},null,-1)])),_:1}),s[6]||(s[6]=e("h1",{class:"text-[#FAE084] text-2xl font-bold"}," Bersama Lestarikan Lingkungan dengan mengurangi konsumsi fesyen ",-1))])])])]),e("div",V,[e("div",P,[s[14]||(s[14]=e("h2",{class:"text-2xl font-bold mb-6 text-center"},"Sign up",-1)),e("form",{onSubmit:s[4]||(s[4]=w((...t)=>i.register&&i.register(...t),["prevent"]))},[e("div",B,[s[8]||(s[8]=e("label",{class:"block text-gray-700 font-medium"},"Nama Lengkap",-1)),o(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.name=t),type:"text",class:"w-full p-3 border rounded",required:""},null,512),[[l,r.name]])]),e("div",M,[s[9]||(s[9]=e("label",{class:"block text-gray-700 font-medium"},"Email",-1)),o(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>r.email=t),type:"email",class:"w-full p-3 border rounded",required:""},null,512),[[l,r.email]])]),e("div",S,[e("div",null,[s[10]||(s[10]=e("label",{class:"block text-gray-700 font-medium"},"Password",-1)),o(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>r.password=t),type:"password",class:"w-full p-3 border rounded",required:"",minlength:"6"},null,512),[[l,r.password]])]),e("div",null,[s[11]||(s[11]=e("label",{class:"block text-gray-700 font-medium"},"Konfirmasi Password",-1)),o(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>r.confirm_password=t),type:"password",class:"w-full p-3 border rounded",required:"",minlength:"6"},null,512),[[l,r.confirm_password]])])]),s[12]||(s[12]=e("button",{type:"submit",class:"w-full bg-[#DAA520] text-white py-3 rounded"}," Buat Akun ",-1))],32),d(a,{to:"/signin"},{default:u(()=>s[13]||(s[13]=[e("p",{class:"text-center text-sm mt-4"},[n(" Sudah buat akun? "),e("a",{href:"#",class:"text-blue-600"},"Sign In")],-1)])),_:1}),s[15]||(s[15]=e("p",{class:"text-center text-xs text-gray-500 mt-2"},[n(" Dengan signin ke Greenc, anda setuju dengan "),e("a",{href:"#",class:"underline"},"Terms"),n(" dan "),e("a",{href:"#",class:"underline"},"Privacy Policy"),n(". ")],-1))])])])}const D=p(v,[["render",U],["__scopeId","data-v-ed86a940"]]);export{D as default};
