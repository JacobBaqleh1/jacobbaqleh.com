import React from "react";


export default function Contact() {
  return (
    <div>
<form
name="contact"
method="POST"
data-netlify="true"
onSubmit="submit"
>
  <input type="hidden" name="form-name" value="contact"></input>
<div>
  <label>First Name <br/>
    <input type="text" name="first-name"></input>
  </label>
</div>
<div>
  <label htmlFor="email"> Email</label> <br/>
  <input id="email" type="email" name="email"></input>
</div>
<div>
  <label htmlFor="">
    Any COmments? <br/>
  <textarea name="comments"></textarea>
  </label>
</div>


  <button type="submit"> Submit The REsult</button>

</form>

    </div>
  )
}