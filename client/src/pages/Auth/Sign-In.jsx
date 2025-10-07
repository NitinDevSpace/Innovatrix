import React from 'react'

function SignIn() {
  return (
		<main className="relative min-h-dvh flex items-center justify-center">
			<img
				src="https://img.freepik.com/free-vector/network-connection-background-gradient_23-2148879893.jpg?semt=ais_hybrid&w=740&q=80"
				alt="Dreamy mountain backdrop"
				className="absolute inset-0 size-full object-cover"
			/>
			<div className="absolute inset-0 bg-[var(--glass-veil)]" />
			<div className="relative px-4 py-16 md:py-24">
				<SignInCard />
			</div>
		</main>
	);
}

export default SignIn
