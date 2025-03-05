import { useMemo, useState } from "react";

type Monster = {
	id: number;
	name: string;
	tentacles: number;
};

export default function MonsterSection() {
	const [monsters, setMonsters] = useState<Monster[]>([
		{ id: 1, name: "Bosse", tentacles: 12 },
		{ id: 2, name: "Kim", tentacles: 25 },
		{ id: 3, name: "Gugge", tentacles: 1248 },
		{ id: 4, name: "Mio", tentacles: 4 },
	]);

	// const totalTentacles = monsters.reduce(
	// 	(sum, monster) => sum + monster.tentacles,
	// 	0
	// );

	const totalTentacles = useMemo(() => {
		console.log("Beräknar antal tentakler...");
		const total = monsters.reduce(
			(sum, monster) => sum + monster.tentacles,
			0
		);
		return total;
	}, [monsters]);

	return (
		<div>
			<h1>MonsterSection</h1>
			<p>Vi har totalt {totalTentacles} tentakler.</p>
			{monsters.map((monster) => (
				<p key={monster.id}>
					Name: {monster.name} har {monster.tentacles} tentakler.
				</p>
			))}
		</div>
	);
}
