import React from "react";

class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      user: {},
      userId: null,
      isUserLoading: false
    }
  }
  
  componentWillUnmount() {
    localStorage.removeItem('users')
  }
  
  componentDidMount() {
    if(localStorage.getItem('users')) {
      this.setState({
        users: JSON.parse(localStorage.getItem('users'))
      })
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res
        })
        localStorage.setItem('users', JSON.stringify(res))
      })
      .catch(err => {
        console.log(err, `<=================== err ==================`);
      })
    }
  }
  
  componentDidUpdate(nextProps, nextState) {
    if(nextState.userId != this.state.userId) {
      fetch(`https://jsonplaceholder.typicode.com/users?id=${this.state.userId}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          user: {
            ...res[0],
            address: {
              street: 0
            }
          },
          isUserLoading: false,
        })
      })
      .catch(err => {
        console.log(err, `<=================== err ==================`);
      })
    }
  }
  
  updateUserId = (userId) => {
    this.setState({ 
      userId,
      isUserLoading: true,
      user: {}
    })
  }
  
  render() {
    
    // if(this.state.users.length === 0) {
    //   return <div>...Loading</div>
    // }
    
    return (
      <div>
        <div>
          <h2>User Details</h2>
          {this.state.isUserLoading && <div>...Loading</div>}
          {
            this.state.user.email &&
            <>
              <div>
                Email: {this.state.user.email}
              </div>
              <div>
                Phone: {this.state.user.phone}
              </div>
              <div>
                Street: {this.state.user.address.street.replace('')}
              </div>
            </>
          }
        </div>
        <hr />
        {this.state.users.length === 0 ? 
          <div>...Loading</div> 
          : 
          this.state.users.map(user => {
            return (
              <div key={user.id}>
                <div>
                  Name: {user.name} {' '}
                  <button onClick={() => this.updateUserId(user.id)}>Get Details</button>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Users;
