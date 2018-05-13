
export interface RestApiEquipment{
  id: number,
  name: string,
  url: string,
  image: string
}

export interface RestApiMuscleGroup {
	
	id: number,
  name: string,
  url: string 
}

export interface RestApiDifficulty {

  id: number,
  name: string,
  level: number           
}

export interface RestApiExercise extends RestApiMuscleGroup {
	
	count: number,
	num_pages: number,
	next: string,
	previous: string,
	results: Array<RestApiResults>,
	
}

export interface RestApiResults extends RestApiDifficulty,RestApiMuscleGroup,RestApiEquipment{
	
	id: number,
  name: string,
  video_url: string,
  difficulty: RestApiDifficulty,
  equipments: Array<RestApiEquipment>,
  muscle_group: Array<RestApiMuscleGroup>,
  images: any,
	url: string
}
