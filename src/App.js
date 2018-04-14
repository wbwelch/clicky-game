import React, { Component } from 'react';
import './App.css';
import Image from './Image/Image'

class App extends Component {
    state = {
        images: [
            {
                id: '1', 
                imageClick: false, 
                url: 'https://cdn-images-1.medium.com/max/590/1*zMcA-vbDRPy3pCI4d2fiPg.jpeg'},
            {
                id: '2', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-cheers-bebe-neuwirth.jpg'}, 
            {
                id: '3', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-cheers-shelley-long.jpg'},
            {
                id: '4', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-cheers-george-wendt.jpg'},
            {
                id: '5', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-cheers-rhea-perlman.jpg'},
            {
                id: '6', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-cheers-kirstie-alley.jpg'},
            {
                id: '7', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-cheers-woody-harrelson.jpg'},
            {
                id: '8', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-cheers-nicholas-colassanto.jpg'},
            {
                id: '9', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-cheers-john-ratzenberger.jpg'},
            {
                id: '10', 
                imageClick: false, 
                url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-frasier-kelsey-grammer.jpg'},
            {
                id: '11', 
                imageClick: false, 
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SGowYfxJh6H6LZTG09Gvswpj8SPTNzlsmo7TwfJ-oGiNHE8d'},
            {
                id: '12', 
                imageClick: false, 
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2-SfLuITrmKfj5XGl_NHi1uSdzAP1uAb2_vhwcGymim59iqB'},
        ]
    }

onClick = (event, index) => {
    const imageClickedHandler = (event, id) => {
        console.log('clicked');
        const imageIndex = this.state.images.findIndex(p => {
            return p.id === id;
        });

        const image = {
            ...this.state.images[imageIndex]
        };

        image.imageClicked = true;

        const images = [...this.state.images];
        images[imageIndex] = image;

        this.setState({images: images})

    };

    const shuffleImagesHandler = () => {
        const images = {...this.state.images};
            for (var i = 11; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = images[i];
                images[i] = images[j];
                images[j] = temp;
            };
//        this.setState({images: images})

    }
    return (imageClickedHandler(), shuffleImagesHandler());
}
  render() {
    
  let imageDisplay = (
        <div>
          {this.state.images.map((image, index) => {
                return <Image 
                        src={image.url} 
                        width={200} 
                        height={200} 
                        mode='fit' 
                        key={image.id}
                        clicked={(event) => this.onClick(event, index)} />  
           })}
        </div>
      );
  
    return (
      <div className="App">
        <h1>Click an image!</h1>
        <p>Don't click the same one twice or you lose!</p>
       
        {imageDisplay}
      </div>
    );
  }
}

export default App;
