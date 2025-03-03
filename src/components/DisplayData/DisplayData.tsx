import useFetch from "../../hooks/useFetch";

// Component using the useFetch Hook
export default function DataDisplay() {
	const { data, loading, error } = useFetch("https://swapi.dev/api/people/1"); // Utilizing useFetch

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			Name: {data?.name}, Height: {data?.height}
		</div>
	);
}
