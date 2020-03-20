<template>
    <div v-if="productList.length>0">
        <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
        <hr>
        <div class="row product-container">
            <app-product v-for="product in productList"><img class="card-img-top" :src="product.selectedImage"
                                                             :alt="product.title"
                                                             alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{product.title}}</h5>
                    <small>
                        <strong>Adet : </strong> {{product.count}}
                    </small>
                    <br>
                    <small>
                        <strong>Fiyat : </strong> {{product.price}}
                    </small>
                    <br>
                    <small>
                        <strong>Tutar : </strong> {{product.totalPrice}}
                    </small>
                </div>
            </app-product>

        </div>
    </div>
</template>


<script>
    import product from "./product";
    import {eventBus} from "../main";

    export default {
        components: {
            appProduct: product
        },
        data() {
            return {
                productList: [],
            }
        },
        created() {
            eventBus.$on('productAdded', (product) => {
                if (this.productList.length < 2) {
                    this.productList.push(product);
                    eventBus.$emit('progressBarUpdated', this.productList.length)
                } else {
                    alert('daha fazla ekleyemezsiniz!!');
                }
            });
        }
    }
</script>

