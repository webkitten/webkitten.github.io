    var Sides = {
      template: `
        <div class="sides">
          <h1 class="sides__title">{{ $route.params.product.title }}</h1>
          <el-carousel type="card" height="500px" :interval="4000"> 
            <el-carousel-item v-for="item in $route.params.product.sides" :key="item.position">
              <div class="sides__image">
                <img :src="item.big" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>`,
    };


    var router = new VueRouter({
      routes: [
        { path: '/sides/:id', name: 'sides', component: Sides },
      ]
    });

    
    var app = new Vue({
      router: router,
      data: {
        products: []
      },
      methods: {
        productById: function(id) {
          var self = this;
          for (var item in self.products) {
            if(self.products[item].id === id) {
              return this.products[item]
            }
          }
        },
        openSides(productId) {
          router.push({ name: 'sides', params: { id: productId, product: this.productById(productId) } })
          setTimeout(function() {
            window.scrollTo(0, document.body.scrollHeight);
          }, 100);
        }
      },
      computed: {

      },
      mounted() {
        axios.get('https://rest.vsemayki.ru/catalog/items?access-token=f6ed359e9eab534b09d846ed56e6e196e7295076')
          .then(function (response) {
            app.products = response.data.items;
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }).$mount('#app');