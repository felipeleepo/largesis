<template>
    <v-container fluid>
        <v-card>
            <v-card-title class="headline">
                Medicamentos
            </v-card-title>                    
            <v-divider></v-divider>
            <v-card-text>
                <Tabela :lista="medicamentos"/>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import Tabela from '@/components/medicamentos/Tabela'
    export default {
        components:{
            Tabela
        },
        data: () => ({
            medicamentos: [
                {Id: '1', Nome: 'Tilenol', Unidade: 'ml'},
                {Id: '2', Nome: 'Aspirina', Unidade: 'comprimido(s)'}           
            ],
            // variaveis do formulario
            dialog: false,
            form: 'Novo Medicamento',            
        }),
        methods: {
        }
    }
</script>