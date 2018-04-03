import React, { Component } from 'react'

//redux
import { AddKeywordForm, AddAdditionalKeywordButton, ButtonControls,
         Instructions, ResearchQuestion, SearchStatement } from '../Componenets'
import { Grid, Paper } from 'material-ui'

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            keywords: [{id: 0, keyword: '', synonym1: '', synonym2: ''}],
            searchStatement: 'My Statement'
        }
        this.updateTextBox = this.updateTextBox.bind(this)
        this.updateSearchStatement = this.updateSearchStatement.bind(this)
        this.addAdditionalKeywordForm = this.addAdditionalKeywordForm.bind(this)
    }

    updateTextBox(event, textBox, id) {
      let keywordsCopy = JSON.parse(JSON.stringify(this.state.keywords))
      if (textBox === 'keyword' || textBox === 'synonym1' || textBox === 'synonym2') {
        if (textBox === 'keyword') keywordsCopy[id].keyword = event.target.value
        if (textBox === 'synonym1') keywordsCopy[id].synonym1 = event.target.value
        if (textBox === 'synonym2') keywordsCopy[id].synonym2 = event.target.value
        this.setState({ keywords: keywordsCopy})
        this.updateSearchStatement()
      } else {
        this.setState({[textBox]: event.target.value})
      }


    }

    updateSearchStatement() {
        console.log(this.state.keywords)
        //map function to create a new array.
            //in the map function, see if keyword first,
            //if was not keword, add the or and the term.
                //if second iteration of map ad the AND
    }

    addAdditionalKeywordForm() {
      var arrayID = this.state.keywords.length
      this.setState({ keywords: [...this.state.keywords, {id: arrayID, keyword: '', synonym1: '', synonym2: ''}]})
    }

    render() {
        return (
            <Grid container>
            {//console.log(this.state)
            }
                <Grid item xl={2} lg={2}></Grid>
                <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>

                        <Instructions />
                        <ButtonControls />
                        <ResearchQuestion question={this.state.question} updateTextBox={this.updateTextBox}/>
                        <Grid container>
                          {
                            this.state.keywords.map(data => (
                              <AddKeywordForm key={data.id} data={data} updateTextBox={this.updateTextBox} />
                            ))
                          }
                          <AddAdditionalKeywordButton addAdditionalKeywordForm={this.addAdditionalKeywordForm} />
                        </Grid>
                        <SearchStatement searchStatement={this.state.searchStatement}/>

                </Grid>
                <Grid item xl={2} lg={2}></Grid>
            </Grid>
        )
    }

}

//mapStateToProps
export default Body
