import React, { Component } from 'react'

class NewTweet extends Component{
	state={
		text:'',
	}
	handleChange = (e) => {
		const text = e.target.value

		this.setState(()=>({
			text
		}))
	}
	handleSubmit =(e)=>{
		e.prevenDefault()

		const { text } = this.state

		//todo: Add Tweet to store

		console.log('New Tweet: ', text)

		this.setState(()=>({
			test:''
		}))
	}

	render(){
		const { text } = this.state

		{/* todo: Redirect to / if submitted */}

		const tweetLeft = 208 - text.length
		return(
			<div>
			<h3 className='center'> Compose new Tweet </h3>
			<form className='new-tweet' onSubmit={this.handleSubmit}>
			<textarea
			pleaseholder="What's happening?"
			value={text}
			onChange={this.handleChange}
			className='textarea'
			masLength={280}
			/>
			{tweetLeft <= 100 && (
				<div className ='tweet-length'>
				{tweetLeft}
				</div>)
			}
			<button
			className='btn'
			type='submit'
			disabled={text === ''}>
			 Submit
			</button>

			</form>
			</div>
			)
		}
	}

	export default NewTweet