import {gql} from 'apollo-boost'
import * as React from 'react';
import {graphql} from 'react-apollo'


const getTendersQuery =  gql`
{
  entities{
    name
  }
}
`


// tslint:disable-next-line:interface-name
export interface Props {
  data: any
}

class TenderList extends React.Component<Props>  {

  public displayTenders(){
    const data = this.props.data
    if (data.loading) {
            // tslint:disable-next-line:no-console
      console.log((data))
    }
    else{
      // tslint:disable-next-line:no-console
      console.log((data))
    }
  }

  public render() {
      // tslint:disable-next-line:no-console
      // console.log(this.props)
      this.displayTenders()
    return (
      <div>
        <p>add</p>
      </div>
    )
  }
}

export default graphql(getTendersQuery)(TenderList)
