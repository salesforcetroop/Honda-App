import { LightningElement ,api} from "lwc";
export default class ColorSelection extends LightningElement{

@api color 

get colorSelectList(){
    return `slds-radio__label color_circle ${this.color.value}`
}

selectionHandler(event){
    this.dispatchEvent(new CustomEvent("colorselection",{
        detail:this.color.value
    }))
}
}