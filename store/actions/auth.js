export const SIGNUP = 'SIGNUP'

export const signup = (name, email, password, introduce) => {
  return async dispatch => {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        introduce: introduce
      }),
    });

    const res = await response.json();
    console.log(res);
    
    dispatch({ type: SIGNUP})
  }
}