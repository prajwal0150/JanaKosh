import React from 'react';
import './dashboard.css';

const StatCard = ({label, value}) => (
	<div className="pjk-card">
		<div className="pjk-card-value">{value}</div>
		<div className="pjk-card-label">{label}</div>
	</div>
);

export default function Dashboard() {
	const stats = [
		{ label: 'Total Requests', value: 128 },
		{ label: 'Open Tickets', value: 7 },
		{ label: 'Resolved', value: 95 },
		{ label: 'Pending Payments', value: 4 },
	];

	const recent = [
		{ id: 1, text: 'Submitted public grievance', time: '2h ago' },
		{ id: 2, text: 'Payment received for application', time: '1d ago' },
		{ id: 3, text: 'Profile updated', time: '3d ago' },
	];

	return (
		<div className="pjk-dashboard">
			<header className="pjk-header">
				<h1>Public Dashboard</h1>
				<p className="pjk-sub">Welcome — here's a quick overview of your activity.</p>
			</header>

			<section className="pjk-stats">
				{stats.map((s) => (
					<StatCard key={s.label} label={s.label} value={s.value} />
				))}
			</section>

			<main className="pjk-main">
				<section className="pjk-panel">
					<h2>Recent Activity</h2>
					<ul className="pjk-list">
						{recent.map((r) => (
							<li key={r.id} className="pjk-list-item">
								<div className="pjk-list-text">{r.text}</div>
								<div className="pjk-list-time">{r.time}</div>
							</li>
						))}
					</ul>
				</section>

				<section className="pjk-panel">
					<h2>Overview</h2>
					<div className="pjk-placeholder">Chart / summary placeholder</div>
				</section>
			</main>
		</div>
	);
}
