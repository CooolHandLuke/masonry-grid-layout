

const posts = []

const shoots = [
    '/shoot1/Look_1.jpg',
    '/shoot1/Look_2.jpg',
    '/shoot2/Look_1.jpg',
    '/shoot2/Look_2.jpg',
    '/shoot2/Look_3.jpg',
    '/shoot2/Look_4.jpg',
    '/shoot2/Look_5.jpg',
    '/shoot2/Look_6.jpg',
    '/shoot2/Look_7.jpg',
    '/shoot3/00 VG COVER MARZO LATAM Kali Uchis (1).jpg',
    '/shoot4/Luke_GQ2_001_v2ext_CMYK.jpg',
    '/shoot4/Luke_GQ2_002_v1_CMYK.jpg',
    '/shoot4/Luke_GQ2_008v2_v2_CMYK.jpg',
    '/shoot4/Luke_GQ2_003_v2_CMYK.jpg',
    '/shoot4/Luke_GQ2_009v3_v2_CMYK.jpg',
    '/shoot4/GQDECJANSOCIALCOVER_ANDREW.jpg',
    '/shoot4/Luke_GQ2_011_v1_CMYK.jpg',
    '/shoot4/Luke_GQ2_012_v1_CMYK.jpg',
    '/shoot5/Basketball-1.png',
    '/shoot5/Commuter-3.png',
    '/shoot5/Dad-1.png',
    '/shoot5/Dad-3.png',
    '/shoot5/FlowerShop-2.png',
    '/shoot5/Skateboarder-1.png',
    '/shoot5/Swimmer-3.png',
    '/shoot6/LOOK_01_0229.jpg',
    '/shoot6/LOOK_02_0408.jpg',
    '/shoot6/LOOK_05_0961-4.jpg',
    '/shoot6/LOOK_06_1483.jpg',
    '/shoot6/ELM050123FOBCOVER_MEGAN_DIGITAL2.jpg',
    '/shoot7/Silk_Ella_Bullnose_PlanetHollywood.jpg',
    '/shoot7/Silk_Nextmilk_Brooklyn_SINGLE.jpg',
    '/shoot7/Silk_Nextmilk_Oneals_SINGLE.jpg',
    '/shoot8/Look_1.jpg',
    '/shoot8/Look_2.jpg',
    '/shoot8/Look_3.jpg',
    '/shoot8/Look_4.jpg',
]

const images = shoots.sort((a, b) => 0.5 - Math.random());

let imageIndex = 0;

for (let i = 1; i <= images.length - 1; i++) {
    let item = {
        id: i,
        title: `Post ${i}`,
        date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)
