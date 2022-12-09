function App() {
	const fontStyle = {
		color: 'aqua',
		fontSize: 60,
		fontWeight: 'normal',
	};
	return (
		<div className='wrap'>
			{/* 가상돔에 직접 객체리터럴 형식으로 스타일 적용 가능 */}
			<h1 style={{ color: 'orange', fontSize: 50 }}>Title1</h1>
			<h1 style={fontStyle}>Title2</h1>
		</div>
	);
}

export default App;
