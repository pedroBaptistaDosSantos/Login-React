const initialState = {
    usuarios: [
        'pedro',
        'carlos',
        'bruno',
        'luciano',
        'tatiana'
    ]
}

const usuariosReducer = (state =initialState.usuarios, action) =>  {
    return state;
}

export default usuariosReducer;