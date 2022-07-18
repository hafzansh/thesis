type Send = Promise<{
    error?: string
    success?: string 
    user?: { username: string }
  }>
  
  export async function send(form: HTMLFormElement): Send {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { accept: 'application/json' },
    })
    return await response.json()
  }
  export async function get_data(url:string,token:string) {    
    const response = await fetch(url,{
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${token}`
      }
    })
    return response
  }
  export async function get(url:string,token:string) {    
    const response = await fetch(url,{
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${token}`
      }
    })
    return response
  }
  export async function post_data(url:string,token:string,body:any) {    
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })
    return response
  }
  export async function put_data(url:string,token:string,body:any) {    
    const response = await fetch(url,{
      method: 'PUT',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })
    return response
  }
  export async function delete_data(url:string,token:string) {    
    const response = await fetch(url,{
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${token}`
      },
    })
    return response
  }