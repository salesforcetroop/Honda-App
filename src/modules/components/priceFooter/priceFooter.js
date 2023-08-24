import { LightningElement,api } from "lwc";
export default class PriceFooter extends LightningElement{

    @api price

    get formatedPrice(){
        return this.formatter(this.price)
    }

    formatter(value){
        if(value){
            return new Intl.NumberFormat('en-CA',{
                style:'currency',
                currency:'CAD',
                maximumFractionDigits:0
            }).format(value)
        }else{
            return null
        }
    }

    contactUsHandler(){
        this.dispatchEvent(new CustomEvent('openmodal',{
            
        }))
    }
    
}