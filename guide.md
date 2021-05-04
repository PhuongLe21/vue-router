- Install vue-router via npm: npm install vue-router@next (for vue3)
Phải qua 2 bước :

B1: Tạo router và gán cho app.
  Tạo 1 router và cho app sử dụng cái router đó, và trong file main sẽ dùng <router-view />
  + Để tạo router thì cần 1 biến:
  + const route = [
    { path: '', component }
  ]
  + Dùng các hàm có sẵn của vue để kết hợp
B2: Tạo link để khi click nó sẽ k reload (vì single page app)
  + Dùng <router-link to="">  