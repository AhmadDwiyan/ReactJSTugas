import React from 'react';
import ReactDom from 'react-dom';

class Halo extends React.Component {
   constructor(thisContruct){
       super(thisContruct);
       this.state = { tugas:"Tugas Belum Selesai ", warna:"alert alert-danger"}
   }
   
   
   tugasSelesai = () => {
       this.setState ( 
           { tugas:"Selesai Dong",
           warna:"alert alert-success"}
       );
   }

    render(){
        return <div className={this.state.warna}> 
        {this.state.tugas}
        <br></br>
        <button className="btn btn-primary" onClick={this.tugasSelesai}>Pencet Untuk Selesai :) </button>
        </div>
        
    }
}
export default Halo;
