
export const status = (state = {}, action)=>{

    switch(action.type){
        case 'open':
            return Object.assign({}, state, {gate:true, formStatus:false});

        case 'close':
            return Object.assign({}, state, {gate:false});

        case 'login':
            return Object.assign({}, state, {authenticated:true, credentials:false, formStatus:false, gate:false});

        case 'logout':
            return Object.assign({}, state, {authenticated:false,formStatus:false});

        case 'getCredentials':
            return Object.assign({}, state, {credentials:true, formStatus:true,formBotStatus:false, gate:false});

        case "closeLogin":
            return Object.assign({}, state, {credentials:false, formStatus:false, gate:false});

        case "botTrainingForm":
            return Object.assign({}, state, {formStatus:true, gate:false, formBotStatus:true, credentials:false});



        case "saveIntentContent":
            return Object.assign({}, state, {intentDataTrain:action.intentData});
            
        case "addIntentTextbox1":
            let temp = Object.assign({}, state);
            if(!temp.indentTrain){
                temp.indentTrain = [];
            }
            let indent = {idx:action.idx, followup_Content:action.followup_Content};
            temp.indentTrain.push(indent);
            return temp;

        case "removeIntentTextbox1":
            const index = state.indentTrain.findIndex(i => i.idx === action.idx)
            let temp2 = Object.assign({}, state)
            temp2.indentTrain = temp2.indentTrain.slice(0, index) + temp2.indentTrain.slice(index+1)
            return temp2;

        default:
            return state;
    }
};




export const status_append = (state = [], action)=>{
    switch(action.type){   

        case "closeForm":
            return [ ];
    
        case "addIntentTextbox":           
            return [
                ...state,
                    {
                        idx:action.idx,
                        followup_Content:action.followup_Content                      
                    }
            ];

        case "removeIntentTextbox":{           
            const index = state.findIndex(i => i.idx === action.idx)
                return [
                    ...state.slice(0,index),
                    ...state.slice(index+1)            
                ];
            }


        

        default:
            return state;
    

    }
};
