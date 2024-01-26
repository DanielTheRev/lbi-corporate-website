import { Project } from '../nuestros-trabajos/models/projects.model';
import { PresentacionInfo, News } from '../sections/models/presentacion.model';

export interface BannersResponse {
	Presentacion: PresentacionInfo;
	NewsList: News[];
	last_projects: {
		_id: string;
		section: string;
		last_project: Project;
	}[];
}
