const data = [
  [
    {
      id: 1,
      name: 'Versace Jeans Couture',
      description: 'Thelma Tote bag synthetic black',
      image: 'greybag.png',
      price: {
        USD: 250.26,
        NOK: 360.43,
      },
      type: 'bag',
    },
    {
      id: 2,
      name: 'Lavie',
      description: 'Animal PU Structure Satchel',
      image: 'brownbag.png',
      price: {
        USD: 120.44,
        NOK: 180.82,
      },
      type: 'bag',
    },
    {
      id: 3,
      name: 'Replay',
      description: 'Fanny pack synthetic black',
      image: 'goldbag.png',
      price: {
        USD: 195.20,
        NOK: 220.66,
      },
      type: 'bag',
    },
    {
      id: 4,
      name: 'LACOSTE',
      description: 'Textured Handheld Bag',
      image: 'secblack.png',
      price: {
        USD: 95.95,
        NOK: 145.33,
      },
      type: 'bag',
    },
    {
      id: 5,
      name: 'Lavie',
      description: 'Solid Handheld Bag',
      image: 'blackbag.png',
      price: {
        USD: 200.04,
        NOK: 267.50,
      },
      type: 'bag',
    },
    {
      id: 6,
      name: 'Emporio Armani',
      description: 'Roberta Handbag polyester',
      image: 'lastbag.png',
      price: {
        USD: 210.82,
        NOK: 280.74,
      },
      type: 'bag',
    },
    {
      id: 7,
      name: 'Van Heusen',
      description: 'Women Solid Laptop Bag',
      image: 'twobags.png',
      price: {
        USD: 160.53,
        NOK: 219.43,
      },
      type: 'bag',
    },
    {
      id: 8,
      name: 'MANGO',
      description: 'Women Zip around Bag',
      image: 'baggold.png',
      price: {
        USD: 145.94,
        NOK: 250.29,
      },
      type: 'bag',
    },
    {
      id: 9,
      name: 'Allen Solly',
      description: 'Animal PU Structure Satchel',
      image: 'brbag.png',
      price: {
        USD: 130.45,
        NOK: 200.53,
      },
      type: 'bag',
    },
    {
      id: 10,
      name: 'Coach',
      description: 'Charlie Handbag Nappa leather',
      image: 'bluebag.png',
      price: {
        USD: 95.95,
        NOK: 96.53,
      },
      type: 'fruit',
    },
    {
      id: 11,
      name: 'Baggit',
      description: 'Women Solid Sling Bag',
      image: 'secbluebag.png',
      price: {
        USD: 79.61,
        NOK: 65.74,
      },
      type: 'bag',
    },
    {
      id: 12,
      name: 'Coach',
      description: 'Charlie Handbag Nappa leather',
      image: 'pinkwhite.png',
      price: {
        USD: 95.95,
        NOK: 96.53,
      },
      type: 'bag',
    },
  ],
  [
    {
      id: 1,
      name: 'Polo',
      description: 'Polo collar t-shirt',
      image: 'pinksh.png',
      price: {
        USD: 80.16,
        NOK: 130.23,
      },
      type: 'Shirt',
    },
    {
      id: 2,
      name: 'Henley',
      description: 'Henley collar T-shirt',
      image: 'jean.png',
      price: {
        USD: 99.55,
        NOK: 118.42,
      },
      type: 'Shirt',
    },
    {
      id: 3,
      name: 'Ringer',
      description: 'Fanny pack synthetic black',
      image: 'pinkshirt.png',
      price: {
        USD: 75.20,
        NOK: 90.96,
      },
      type: 'Shirt',
    },
    {
      id: 4,
      name: 'LACOSTE',
      description: 'Textured brand shirt',
      image: 'orsh.png',
      price: {
        USD: 85.95,
        NOK: 95.43,
      },
      type: 'Shirt',
    },
    {
      id: 5,
      name: 'Pocket',
      description: 'Solid designer shirt',
      image: 'capsh.png',
      price: {
        USD: 200.04,
        NOK: 267.50,
      },
      type: 'Shirt',
    },
    {
      id: 6,
      name: 'Emporio Armani',
      description: 'Roberta Handbag polyester',
      image: 'tsh.png',
      price: {
        USD: 90.92,
        NOK: 110.54,
      },
      type: 'Shirt',
    },
    {
      id: 7,
      name: 'Van Heusen',
      description: 'Women Solid Laptop Bag',
      image: 'lasts.png',
      price: {
        USD: 120.23,
        NOK: 140.63,
      },
      type: 'Shirt',
    },
    {
      id: 8,
      name: 'Raglan',
      description: 'Raglan sleeve t-shirt',
      image: 'tshi.png',
      price: {
        USD: 50.94,
        NOK: 70.29,
      },
      type: 'Shirt',
    },
    {
      id: 9,
      name: 'Douche bag',
      description: 'Douche bag neck t-shirt',
      image: 'grsh.png',
      price: {
        USD: 89.15,
        NOK: 105.53,
      },
      type: 'Shirt',
    },
    {
      id: 10,
      name: 'Yoke',
      description: 'Yoke neck t-shirts',
      image: 'bluish.png',
      price: {
        USD: 100.55,
        NOK: 120.53,
      },
      type: 'Shirt',
    },
    {
      id: 11,
      name: 'Baggit',
      description: 'Women Solid Sling Bag',
      image: 'greensh.png',
      price: {
        USD: 55.61,
        NOK: 75.74,
      },
      type: 'Shirt',
    },
    {
      id: 12,
      name: 'Coach',
      description: 'Charlie Handbag Nappa leather',
      image: 'blacksh.png',
      price: {
        USD: 70.95,
        NOK: 90.53,
      },
      type: 'Shirt',
    },
  ],
  [
    {
      id: 1,
      name: 'Sofa',
      description: 'Thelma Tote bag synthetic black',
      image: 'sof.png',
      price: {
        USD: 350.66,
        NOK: 400.99,
      },
      type: 'Sofa',
    },
    {
      id: 2,
      name: 'Sofa',
      description: 'Animal PU Structure Satchel',
      image: 'resof.png',
      price: {
        USD: 199.55,
        NOK: 218.42,
      },
      type: 'Sofa',
    },
    {
      id: 3,
      name: 'Sofa',
      description: 'Fanny pack synthetic black',
      image: 'brownsof.png',
      price: {
        USD: 175.20,
        NOK: 190.96,
      },
      type: 'Sofa',
    },
    {
      id: 4,
      name: 'LACOSTE',
      description: 'Textured Handheld Bag',
      image: 'livin.png',
      price: {
        USD: 120.55,
        NOK: 145.93,
      },
      type: 'Sofa',
    },
    {
      id: 5,
      name: 'Lavie',
      description: 'Solid Handheld Bag',
      image: 'tach.png',
      price: {
        USD: 200.04,
        NOK: 267.50,
      },
      type: 'Shirt',
    },
    {
      id: 6,
      name: 'Emporio Armani',
      description: 'Roberta Handbag polyester',
      image: 'chan.png',
      price: {
        USD: 90.92,
        NOK: 110.54,
      },
      type: 'Shirt',
    },
    {
      id: 7,
      name: 'Van Heusen',
      description: 'Women Solid Laptop Bag',
      image: 'whites.png',
      price: {
        USD: 120.23,
        NOK: 140.63,
      },
      type: 'Shirt',
    },
    {
      id: 8,
      name: 'TV',
      description: 'Women Zip around Bag',
      image: 'tv.png',
      price: {
        USD: 400.94,
        NOK: 600.29,
      },
      type: 'TV',
    },
    {
      id: 9,
      name: 'Lamp',
      description: 'Animal PU Structure Satchel',
      image: 'dini.png',
      price: {
        USD: 89.15,
        NOK: 110.33,
      },
      type: 'Lamp',
    },
    {
      id: 10,
      name: 'Stand',
      description: 'Charlie Handbag Nappa leather',
      image: 'stan.png',
      price: {
        USD: 99.77,
        NOK: 120.47,
      },
      type: 'Stand',
    },
    {
      id: 11,
      name: 'Bed',
      description: 'Women Solid Sling Bag',
      image: 'bex.png',
      price: {
        USD: 300.57,
        NOK: 450.99,
      },
      type: 'Bed',
    },
    {
      id: 12,
      name: 'Bed',
      description: 'Charlie Handbag Nappa leather',
      image: 'bed.png',
      price: {
        USD: 350.95,
        NOK: 500.26,
      },
      type: 'Bed',
    },
  ],
  [
    {
      id: 1,
      name: 'Sofa',
      description: 'Thelma Tote bag synthetic black',
      image: 'nou.png',
      price: {
        USD: 350.66,
        NOK: 400.99,
      },
      type: 'Kid',
    },
    {
      id: 2,
      name: 'Sofa',
      description: 'Animal PU Structure Satchel',
      image: 'skirt.png',
      price: {
        USD: 199.55,
        NOK: 218.42,
      },
      type: 'Kid',
    },
    {
      id: 3,
      name: 'Sofa',
      description: 'Fanny pack synthetic black',
      image: 'three.png',
      price: {
        USD: 175.20,
        NOK: 190.96,
      },
      type: 'Kid',
    },
    {
      id: 4,
      name: 'LACOSTE',
      description: 'Textured Handheld Bag',
      image: 'snk.png',
      price: {
        USD: 120.55,
        NOK: 145.93,
      },
      type: 'Kid',
    },
    {
      id: 5,
      name: 'Lavie',
      description: 'Solid Handheld Bag',
      image: 'skir.png',
      price: {
        USD: 200.04,
        NOK: 267.50,
      },
      type: 'Kid',
    },
    {
      id: 6,
      name: 'Emporio Armani',
      description: 'Roberta Handbag polyester',
      image: 'shoki.png',
      price: {
        USD: 90.92,
        NOK: 110.54,
      },
      type: 'Kid',
    },
    {
      id: 7,
      name: 'Van Heusen',
      description: 'Women Solid Laptop Bag',
      image: 'shir.png',
      price: {
        USD: 120.23,
        NOK: 140.63,
      },
      type: 'SKid',
    },
    {
      id: 8,
      name: 'TV',
      description: 'Women Zip around Bag',
      image: 'pisk.png',
      price: {
        USD: 400.94,
        NOK: 600.29,
      },
      type: 'Kid',
    },
    {
      id: 9,
      name: 'Lamp',
      description: 'Animal PU Structure Satchel',
      image: 'kish.png',
      price: {
        USD: 89.15,
        NOK: 110.33,
      },
      type: 'Kid',
    },
    {
      id: 10,
      name: 'Stand',
      description: 'Charlie Handbag Nappa leather',
      image: 'kidtre.png',
      price: {
        USD: 99.77,
        NOK: 120.47,
      },
      type: 'Kid',
    },
    {
      id: 11,
      name: 'Bed',
      description: 'Women Solid Sling Bag',
      image: 'kido.png',
      price: {
        USD: 300.57,
        NOK: 450.99,
      },
      type: 'Kid',
    },
    {
      id: 12,
      name: 'Bed',
      description: 'Charlie Handbag Nappa leather',
      image: 'kidi.png',
      price: {
        USD: 350.95,
        NOK: 500.26,
      },
      type: 'Kid',
    },
  ],
  [
    {
      id: 1,
      name: 'Shoes',
      description: 'Thelma Tote bag synthetic black',
      image: 'bt.png',
      price: {
        USD: 188.66,
        NOK: 250.99,
      },
      type: 'Shoes',
    },
    {
      id: 2,
      name: 'Shoes',
      description: 'Animal PU Structure Satchel',
      image: 'blx.png',
      price: {
        USD: 120.55,
        NOK: 318.42,
      },
      type: 'Shoes',
    },
    {
      id: 3,
      name: 'Shoes',
      description: 'Fanny pack synthetic black',
      image: 'bt.png',
      price: {
        USD: 135.20,
        NOK: 150.96,
      },
      type: 'Shoes',
    },
    {
      id: 4,
      name: 'Shoes',
      description: 'Textured Handheld Bag',
      image: 'cam.png',
      price: {
        USD: 120.55,
        NOK: 145.93,
      },
      type: 'Shoes',
    },
    {
      id: 5,
      name: 'Shoes',
      description: 'Solid Handheld Bag',
      image: 'la.png',
      price: {
        USD: 115.04,
        NOK: 136.50,
      },
      type: 'Shoes',
    },
    {
      id: 6,
      name: 'Shoes',
      description: 'Roberta Handbag polyester',
      image: 'men.png',
      price: {
        USD: 90.92,
        NOK: 110.54,
      },
      type: 'Shoes',
    },
    {
      id: 7,
      name: 'Shoes',
      description: 'Women Solid Laptop Bag',
      image: 'nik.png',
      price: {
        USD: 110.23,
        NOK: 130.63,
      },
      type: 'Shoes',
    },
    {
      id: 8,
      name: 'Shoes',
      description: 'Women Zip around Bag',
      image: 'sh.png',
      price: {
        USD: 99.94,
        NOK: 120.29,
      },
      type: 'Shoes',
    },
    {
      id: 9,
      name: 'Shoes',
      description: 'Animal PU Structure Satchel',
      image: 'sne.png',
      price: {
        USD: 89.15,
        NOK: 110.33,
      },
      type: 'Shoes',
    },
    {
      id: 10,
      name: 'Shoes',
      description: 'Charlie Handbag Nappa leather',
      image: 'squ.png',
      price: {
        USD: 110.77,
        NOK: 112.47,
      },
      type: 'Shoes',
    },
  ],
  [
    {
      id: 1,
      name: 'Shoes',
      description: 'Thelma Tote bag synthetic black',
      image: 'san.png',
      price: {
        USD: 220.66,
        NOK: 260.99,
      },
      type: 'Shoes',
    },
    {
      id: 2,
      name: 'Shoes',
      description: 'Animal PU Structure Satchel',
      image: 'bl.png',
      price: {
        USD: 179.55,
        NOK: 218.42,
      },
      type: 'Shoes',
    },
    {
      id: 3,
      name: 'Shoes',
      description: 'Fanny pack synthetic black',
      image: 'boot.png',
      price: {
        USD: 155.20,
        NOK: 180.96,
      },
      type: 'Shoes',
    },
    {
      id: 4,
      name: 'Shoes',
      description: 'Textured Handheld Bag',
      image: 'leo.png',
      price: {
        USD: 100.55,
        NOK: 125.93,
      },
      type: 'Shoes',
    },
    {
      id: 5,
      name: 'Shoes',
      description: 'Solid Handheld Bag',
      image: 'nik.png',
      price: {
        USD: 200.04,
        NOK: 237.50,
      },
      type: 'Shoes',
    },
    {
      id: 6,
      name: 'Shoes',
      description: 'Roberta Handbag polyester',
      image: 'op.png',
      price: {
        USD: 99.92,
        NOK: 110.54,
      },
      type: 'Shoes',
    },
    {
      id: 7,
      name: 'Shoes',
      description: 'Women Solid Laptop Bag',
      image: 'pinkshoe.png',
      price: {
        USD: 130.23,
        NOK: 140.63,
      },
      type: 'Shoes',
    },
    {
      id: 8,
      name: 'Shoes',
      description: 'Women Zip around Bag',
      image: 'san.png',
      price: {
        USD: 200.94,
        NOK: 230.29,
      },
      type: 'Shoes',
    },
    {
      id: 9,
      name: 'Shoes',
      description: 'Animal PU Structure Satchel',
      image: 'sle.png',
      price: {
        USD: 89.15,
        NOK: 110.33,
      },
      type: 'Shoes',
    },
    {
      id: 10,
      name: 'Shoes',
      description: 'Charlie Handbag Nappa leather',
      image: 'sne.png',
      price: {
        USD: 99.77,
        NOK: 120.47,
      },
      type: 'Shoes',
    },
  ],
];

export default data;
