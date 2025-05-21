import AppleWatch from '../redux/AppleWatch.png';
import Headsets from '../Assets/Headsets.png';
import SubwayIphone from '../Assets/SubwayIphone.png';
import BlackPhone from '../Assets/BlackPhone.png';
import IphoneRed from '../Assets/IphoneRed.png';
import MilkyWhitePhone from '../Assets/MilkyWhitePhone.png';
import IphoneThirteen from '../Assets/IphoneThirteen.png';
import Four from '../Assets/Four.png';

const products = [
    {
      id: '1',
      name: 'AppleWatch',
      description: 'Series 5 SE',
      price: 529.99,
      image: AppleWatch,
      rating: 4.6,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      fullDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
      cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
    },
    {
      id: '2',
      name: 'Sony ZX330BT',
      description: 'Light Grey',
      price: 39.99,
      image: Headsets,
      rating: 4.6,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      fullDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
      cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
    },
    {
        id: '3',
        name: 'Iphone 11',
        description: 'Serious Black',
        price: 619.99,
        image: BlackPhone,
        rating: 4.6,
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
        cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
      },
      {
        id: '4',
        name: 'Iphone 11',
        description: 'Subway Blue',
        price: 619.99,
        image: SubwayIphone,
        rating: 4.6,
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
        cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
      },
      {
        id: '5',
        name: 'Iphone 11',
        description: 'Product Red',
        price: 619.99,
        image: IphoneRed,
        rating: 4.6,
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
        cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
      },
      {
        id: '6',
        name: 'Iphone 11',
        description: 'Milky White',
        price: 619.99,
        image: MilkyWhitePhone,
        rating: 4.6,
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
        cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
      },
      {
        id: '7',
        name: 'Iphone 13',
        description: 'Product Red',
        price: 619.99,
        image: IphoneThirteen,
        rating: 4.6,
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
        cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
      },
      {
        id: '8',
        name: 'Iphone 14',
        description: 'Product Red',
        price: 619.99,
        image: Four,
        rating: 4.6,
        information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
        cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
      },
    
  ];
  
  export default products;
  