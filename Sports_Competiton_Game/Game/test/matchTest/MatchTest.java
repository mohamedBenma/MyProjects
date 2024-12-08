package matchTest;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import competititonTest.MockCompetition;
import competitor.Competitor;
import match.Match;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;
import match.matchobserver.MatchObserver;

public abstract class MatchTest { 
	protected Match myMatch;
	protected abstract  Match createMatch(Competitor c1,Competitor c2);
	
@BeforeEach
	public void init() {
		Competitor c1=new Competitor ("Mohamed");
		Competitor c2=new Competitor ("El Ghani");
		this.myMatch=this.createMatch(c1,c2);
	}

	@Test
	public void getCTest() {
		String comp1=this.myMatch.getC1().getPlayer_Name();
		assertEquals(comp1,"Mohamed");
		int comp2_points=this.myMatch.getC2().getNb_Points();
		assertEquals(comp2_points,0);
	}
	@Test public void getWinner() {
		this.myMatch.OrganizeMatch();
		assertEquals(this.myMatch.getWinner().getNb_Points(),1);
	}
	@Test public void getLooser() {
		this.myMatch.OrganizeMatch();
		assertEquals(this.myMatch.getLooser().getNb_Points(),0);
	}
	
	
}

