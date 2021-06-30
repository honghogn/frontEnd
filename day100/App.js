import React from 'react';
import Clickevent from './Clickevent';
import Header from './Header';
import Footer from './Footer'
const App = () => {
    
    let buttonClick=()=>{
        console.log('click');
    }
    return (

        <div style={{width:'90%',margin:'0 35%'}}>
            <Header />
           <Clickevent />
<Footer />
        </div>
    );
};

export default App;