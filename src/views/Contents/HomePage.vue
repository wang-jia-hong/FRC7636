<template>
    <div>
        <v-img
            aspect-ratio="2"
            src="@/assets/FrontIMG/FrontIMGTest.jpg"
        >
            <div class="text-left" style="font-size: 2em;">
                FRC #7636<br />Robomania            
            </div>
        </v-img>
        
        <div
            class="pa-10"
            style="background-color: #A1A29E"
        >
            <div v-for="(cardItem, index) in cardItems" :key="index">
                <div class="card pa-6 mx-auto" height="220">
                    <v-row>
                        <v-col
                            v-if="index % 2 == 0"
                            cols="12"
                            md="3"
                            class="text-center my-auto"
                        >
                            <img :src="cardItem.imgPath" width="140">
                        </v-col>

                        <v-col order="2">
                            <h1 class="mb-2">
                                {{ cardItem.title }}
                            </h1>
                            <p>
                                {{ cardItem.content }}
                            </p>
                        </v-col>
                        
                        <v-col
                            :order="imageHeight"
                            v-if="index % 2 == 1"
                            cols="12"
                            md="3"
                            class="text-center my-auto"
                        >
                            <img :src="cardItem.imgPath" width="140">
                        </v-col>
                    </v-row>
                </div>
                <hr color="#000" class="mx-auto my-10" style="max-width: 90%">
            </div>

            <div>
                <div color="#a1a29e" class="px-10 text-center">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            lg="3"
                            v-for="(bottomItem, index) in bottomItems"
                            :key="index"
                        >
                            <img :src="bottomItem.photo" width="200">
                            <div class="text-center">
                                {{ bottomItem.text }}
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <hr color="#8f8f8f" class="mx-auto mb-5" style="width: 85%">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        bottomItems: [
            {
                photo: "HomePage/Logo7636.jpg",
                text: "FRC2019:Deep Space",
            },
            {
                photo: "HomePage/Logo7636.jpg",
                text: "2019 Charlle's Comet",
            },
            {
                photo: "HomePage/Logo7636.jpg",
                text: "About FRC #7636",
            },
            {
                photo: "HomePage/Logo7636.jpg",
                text: "Coming up ~~~",
            }
        ],
        cardItems: [
            {
                title: "NEHS @ CTSP",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis iure molestias commodi ipsa mollitia quo explicabo assumenda, perspiciatis officia magni odio soluta minima dolore porro magnam tempore voluptates nostrum tenetur fuga. Laudantium, veritatis asperiores, modi ipsa ipsam porro tenetur cum animi ex earum sapiente ea? Amet fugit tenetur harum placeat perspiciatis praesentium distinctio, magnam laboriosam, eos molestias provident minima doloribus ratione rem officiis, error earum enim a ex quam asperiores eaque? Sapiente, repellat! Tempora corrupti consequuntur vero, exercitationem ipsam sapiente eius. Illum minus perferendis reiciendis, omnis et nihil est, doloribus consequuntur iure rerum consequatur nulla similique, dicta eligendi vero adipisci voluptatum aspernatur dolores incidunt vel. Quasi commodi illo vero voluptatibus nisi doloribus neque fugiat dolorum, iure eveniet quas dignissimos architecto. Laudantium libero quia excepturi. Odio commodi eligendi tempora, molestias hic ratione! Esse voluptate assumenda nam explicabo aliquam ipsam saepe odit magnam illum quas dolores cupiditate maxime inventore, excepturi nulla dicta quibusdam facilis aspernatur id! Nisi, sequi corporis? Harum, assumenda fugit! Cumque harum quas veniam? Architecto natus perferendis repellat enim blanditiis atque optio exercitationem, nobis voluptates delectus, dolor sapiente hic animi libero excepturi modi! Praesentium fugit maiores, fuga repellendus adipisci, architecto reprehenderit hic ducimus magni temporibus voluptatum tempora laborum ea quod, quia quos molestias. Voluptatem, commodi! Nihil veniam unde maiores necessitatibus saepe perspiciatis nulla corrupti eligendi sequi est animi ea cupiditate, aspernatur ducimus corporis amet numquam sint, incidunt quaerat debitis possimus. A veniam eaque omnis voluptate eligendi deleniti facilis quibusdam obcaecati repudiandae dolorum iusto nesciunt sit aliquid quidem doloremque placeat id, eos beatae dolorem ea autem corporis iste. Corporis, cupiditate officiis culpa impedit eveniet nisi? Amet odio, quo vero quia ex omnis sint aspernatur cupiditate ipsa eaque dolores suscipit ullam veritatis tempore quae molestias perferendis deserunt sequi delectus accusantium consectetur rem quod dolore! Minus provident culpa expedita similique nobis accusamus.",
                imgPath: "/Elements/Home/Home-CTSP.png"
            },
            {
                title: "About Us",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis iure molestias commodi ipsa mollitia quo explicabo assumenda, perspiciatis officia magni odio soluta minima dolore porro magnam tempore voluptates nostrum tenetur fuga. Laudantium, veritatis asperiores, modi ipsa ipsam porro tenetur cum animi ex earum sapiente ea? Amet fugit tenetur harum placeat perspiciatis praesentium distinctio, magnam laboriosam, eos molestias provident minima doloribus ratione rem officiis, error earum enim a ex quam asperiores eaque? Sapiente, repellat! Tempora corrupti consequuntur vero, exercitationem ipsam sapiente eius. Illum minus perferendis reiciendis, omnis et nihil est, doloribus consequuntur iure rerum consequatur nulla similique, dicta eligendi vero adipisci voluptatum aspernatur dolores incidunt vel. Quasi commodi illo vero voluptatibus nisi doloribus neque fugiat dolorum, iure eveniet quas dignissimos architecto. Laudantium libero quia excepturi. Odio commodi eligendi tempora, molestias hic ratione! Esse voluptate assumenda nam explicabo aliquam ipsam saepe odit magnam illum quas dolores cupiditate maxime inventore, excepturi nulla dicta quibusdam facilis aspernatur id! Nisi, sequi corporis? Harum, assumenda fugit! Cumque harum quas veniam? Architecto natus perferendis repellat enim blanditiis atque optio exercitationem, nobis voluptates delectus, dolor sapiente hic animi libero excepturi modi! Praesentium fugit maiores, fuga repellendus adipisci, architecto reprehenderit hic ducimus magni temporibus voluptatum tempora laborum ea quod, quia quos molestias. Voluptatem, commodi! Nihil veniam unde maiores necessitatibus saepe perspiciatis nulla corrupti eligendi sequi est animi ea cupiditate, aspernatur ducimus corporis amet numquam sint, incidunt quaerat debitis possimus. A veniam eaque omnis voluptate eligendi deleniti facilis quibusdam obcaecati repudiandae dolorum iusto nesciunt sit aliquid quidem doloremque placeat id, eos beatae dolorem ea autem corporis iste. Corporis, cupiditate officiis culpa impedit eveniet nisi? Amet odio, quo vero quia ex omnis sint aspernatur cupiditate ipsa eaque dolores suscipit ullam veritatis tempore quae molestias perferendis deserunt sequi delectus accusantium consectetur rem quod dolore! Minus provident culpa expedita similique nobis accusamus.",
                imgPath: "/Elements/Home/Home-CTSP.png"
            },
            {
                title: "three",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis iure molestias commodi ipsa mollitia quo explicabo assumenda, perspiciatis officia magni odio soluta minima dolore porro magnam tempore voluptates nostrum tenetur fuga. Laudantium, veritatis asperiores, modi ipsa ipsam porro tenetur cum animi ex earum sapiente ea? Amet fugit tenetur harum placeat perspiciatis praesentium distinctio, magnam laboriosam, eos molestias provident minima doloribus ratione rem officiis, error earum enim a ex quam asperiores eaque? Sapiente, repellat! Tempora corrupti consequuntur vero, exercitationem ipsam sapiente eius. Illum minus perferendis reiciendis, omnis et nihil est, doloribus consequuntur iure rerum consequatur nulla similique, dicta eligendi vero adipisci voluptatum aspernatur dolores incidunt vel. Quasi commodi illo vero voluptatibus nisi doloribus neque fugiat dolorum, iure eveniet quas dignissimos architecto. Laudantium libero quia excepturi. Odio commodi eligendi tempora, molestias hic ratione! Esse voluptate assumenda nam explicabo aliquam ipsam saepe odit magnam illum quas dolores cupiditate maxime inventore, excepturi nulla dicta quibusdam facilis aspernatur id! Nisi, sequi corporis? Harum, assumenda fugit! Cumque harum quas veniam? Architecto natus perferendis repellat enim blanditiis atque optio exercitationem, nobis voluptates delectus, dolor sapiente hic animi libero excepturi modi! Praesentium fugit maiores, fuga repellendus adipisci, architecto reprehenderit hic ducimus magni temporibus voluptatum tempora laborum ea quod, quia quos molestias. Voluptatem, commodi! Nihil veniam unde maiores necessitatibus saepe perspiciatis nulla corrupti eligendi sequi est animi ea cupiditate, aspernatur ducimus corporis amet numquam sint, incidunt quaerat debitis possimus. A veniam eaque omnis voluptate eligendi deleniti facilis quibusdam obcaecati repudiandae dolorum iusto nesciunt sit aliquid quidem doloremque placeat id, eos beatae dolorem ea autem corporis iste. Corporis, cupiditate officiis culpa impedit eveniet nisi? Amet odio, quo vero quia ex omnis sint aspernatur cupiditate ipsa eaque dolores suscipit ullam veritatis tempore quae molestias perferendis deserunt sequi delectus accusantium consectetur rem quod dolore! Minus provident culpa expedita similique nobis accusamus.",
                imgPath: "/Elements/Home/Home-CTSP.png"
            },
            {
                title: "four",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis iure molestias commodi ipsa mollitia quo explicabo assumenda, perspiciatis officia magni odio soluta minima dolore porro magnam tempore voluptates nostrum tenetur fuga. Laudantium, veritatis asperiores, modi ipsa ipsam porro tenetur cum animi ex earum sapiente ea? Amet fugit tenetur harum placeat perspiciatis praesentium distinctio, magnam laboriosam, eos molestias provident minima doloribus ratione rem officiis, error earum enim a ex quam asperiores eaque? Sapiente, repellat! Tempora corrupti consequuntur vero, exercitationem ipsam sapiente eius. Illum minus perferendis reiciendis, omnis et nihil est, doloribus consequuntur iure rerum consequatur nulla similique, dicta eligendi vero adipisci voluptatum aspernatur dolores incidunt vel. Quasi commodi illo vero voluptatibus nisi doloribus neque fugiat dolorum, iure eveniet quas dignissimos architecto. Laudantium libero quia excepturi. Odio commodi eligendi tempora, molestias hic ratione! Esse voluptate assumenda nam explicabo aliquam ipsam saepe odit magnam illum quas dolores cupiditate maxime inventore, excepturi nulla dicta quibusdam facilis aspernatur id! Nisi, sequi corporis? Harum, assumenda fugit! Cumque harum quas veniam? Architecto natus perferendis repellat enim blanditiis atque optio exercitationem, nobis voluptates delectus, dolor sapiente hic animi libero excepturi modi! Praesentium fugit maiores, fuga repellendus adipisci, architecto reprehenderit hic ducimus magni temporibus voluptatum tempora laborum ea quod, quia quos molestias. Voluptatem, commodi! Nihil veniam unde maiores necessitatibus saepe perspiciatis nulla corrupti eligendi sequi est animi ea cupiditate, aspernatur ducimus corporis amet numquam sint, incidunt quaerat debitis possimus. A veniam eaque omnis voluptate eligendi deleniti facilis quibusdam obcaecati repudiandae dolorum iusto nesciunt sit aliquid quidem doloremque placeat id, eos beatae dolorem ea autem corporis iste. Corporis, cupiditate officiis culpa impedit eveniet nisi? Amet odio, quo vero quia ex omnis sint aspernatur cupiditate ipsa eaque dolores suscipit ullam veritatis tempore quae molestias perferendis deserunt sequi delectus accusantium consectetur rem quod dolore! Minus provident culpa expedita similique nobis accusamus.",
                imgPath: "/Elements/Home/Home-CTSP.png"
            },
        ]
    }),
    computed: {
      // eslint-disable-next-line vue/return-in-computed-property
      imageHeight () {
        // eslint-disable-next-line no-console
        console.log(document.body.clientWidth)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 1
          case 'sm': return 1
          case 'md': return 1
          case 'lg': return 3
          case 'xl': return 3
        }
      },
    }
}
</script>

<style>
.card {
    background-color: #767774;
    width: 95%;
}
</style>