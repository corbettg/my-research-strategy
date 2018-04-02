import React, { Component } from 'react'

//redux
import { AddKeywordForm, ButtonControls, Instructions, ResearchQuestion, SearchStatement } from '../Componenets'
import { Grid, Paper } from 'material-ui'

class Body extends Component {


    render() {
        return (
            <Grid container>
                <Grid item xl={2} lg={2}></Grid>
                <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    
                        <Instructions />
                        <ButtonControls />
                        <ResearchQuestion researchQuestion="Placeholder Text"/>
                        <Grid container>
                            <AddKeywordForm />
                            <AddKeywordForm />
                        </Grid>
                        <SearchStatement />
               
                </Grid> 
                <Grid item xl={2} lg={2}></Grid>
            </Grid>
        )
    }

}

//mapStateToProps
export default Body