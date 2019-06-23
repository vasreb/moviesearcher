interface Genre {
	id: number;
	name: string;
}

export interface SpecifyMovie {
	title: string;
	overview: string;
	genres: Genre[];
	vote_average?: number;
	vote_count?: number;
	release_date?: string;
	tagline?: string;
	revenue?: number;
	budget?: number;
	status?: string;
	id: number;
	poster_path?: string;
}
