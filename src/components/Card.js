import './Card.scss'
export default function Card({img, title, content}) {
	return (
		<div className="card">
			<div className="card-img">{img}</div>
			<div className="card-body">
				<div className="card-title">{title}</div>
				<div className="card-content">{content}</div>
			</div>
		</div>
	);
}
