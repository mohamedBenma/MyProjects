package competitor;

public class Competitor {
	String player_Name;
	int nb_Points;
	boolean IsplayerInCompetititon;

	public Competitor(String name) {
		this.player_Name=name;
		this.nb_Points=0;
		this.IsplayerInCompetititon=false;
	}
	/**
	 * it returns the points number of the competitor
	 * @return the player's points number
	 */
	public int getNb_Points() {
		return this.nb_Points;
	}
	/** 
	 * it adds a point to a competitor
	 */

	public void addPoint() {
		this.nb_Points +=1;
	}
	/**
	 * it update the points number of a competitor
	 * @param nb_Points the new points number of a competitor
	 */

	public void setNb_Points(int nb_Points) {
		this.nb_Points = nb_Points;
	}
	/**
	 * it returns the player's name
	 * @return the name of the player
	 */
	public String getPlayer_Name() {
		return this.player_Name;
	}


}
