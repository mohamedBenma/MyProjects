package competititonTest;

import static org.junit.Assert.assertSame;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import competition.Competition;
import competition.CompetitorsNumberNotPowerOfTwoException;
import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;
import match.matchobserver.MatchObserver;
import match.matchobserver.MatchReminder;

public abstract class CompetitionTest{
	protected Competition myCompetition;
	protected abstract Competition createCompetition(List<Competitor> list_comp,ArrayList<MatchObserver> ob) throws CompetitorsNumberNotPowerOfTwoException;
	protected MockCompetition mock;
	

@BeforeEach
public void init() throws CompetitorsNumberNotPowerOfTwoException{
	List <Competitor> list_comp= new ArrayList<Competitor>(); 
	ArrayList<MatchObserver> ob=new ArrayList<MatchObserver>();
	ob.add(new Journalist("matheo"));
	ob.add(new BookMaker("betclic"));
	Competitor c1=new Competitor("mohamed");
	Competitor c2=new Competitor("gani");
	Competitor c3=new Competitor("malcolm");
	Competitor c4=new Competitor("nelson");
	list_comp.add(c1); 
	list_comp.add(c2);
	list_comp.add(c3);
	list_comp.add(c4);
	this.mock=new MockCompetition(list_comp,ob);
	this.myCompetition=this.createCompetition(list_comp,ob); 
}
	
	@Test
	public void getCompetitorsTest() {
		
		List <Competitor> getcomp= new ArrayList<Competitor>(this.myCompetition.getCompetitors().size());
		getcomp=this.myCompetition.getCompetitors();
		assertEquals(getcomp.size(),4); 
		Competitor c=new Competitor("mohamed");
		assertEquals(getcomp.get(0).getPlayer_Name(),c.getPlayer_Name());
	}
	@Test
	public void comp_rankTest() {
		int length_Comp_rank=this.myCompetition.getComp_rank().size();
		int length_Principal_list=this.myCompetition.getCompetitors().size();
		assertEquals(length_Comp_rank,length_Principal_list);
		Competitor c=new Competitor("mohamed");
		Competitor comp1=this.myCompetition.getCompetitors().get(0);
		assertEquals(c.getPlayer_Name(),comp1.getPlayer_Name());
		int point_comp=this.myCompetition.getComp_rank().get(comp1);
		assertEquals(point_comp,0);
		
		assertTrue(point_comp==comp1.getNb_Points());
		
	}
	@Test
	public void rankingTest() {
		Competitor comp1=this.myCompetition.getCompetitors().get(0);
		Competitor comp2=this.myCompetition.getCompetitors().get(1);
		assertEquals(comp2.getNb_Points(),0);
		comp1.addPoint();
		comp2.setNb_Points(2);
		this.myCompetition.setComp_rank(this.myCompetition.getComp_rank(),comp1);
		this.myCompetition.setComp_rank(this.myCompetition.getComp_rank(),comp2);
		assertEquals(this.myCompetition.getComp_rank().get(comp1),1);
		assertEquals(this.myCompetition.getComp_rank().get(comp2),comp2.getNb_Points());
		Map<Competitor,Integer>new_rank=this.myCompetition.getComp_rank();
		new_rank=this.myCompetition.ranking();
		assertTrue(new_rank.containsKey(comp1));
		assertTrue(new_rank.containsKey(comp2));
		int points_premier=new_rank.get(new_rank.keySet().toArray()[0]);
		System.out.println(this.myCompetition.getComp_rank());
		assertEquals(points_premier,comp2.getNb_Points());
		Competitor premier=new_rank.keySet().iterator().next();
		assertEquals(premier.getPlayer_Name(),comp2.getPlayer_Name());
			
	}
	@Test
	public void playMatchTest() {
		Competitor comp1=this.mock.getCompetitors().get(0);
		Competitor comp2=this.mock.getCompetitors().get(1);
		this.mock.playMatch(comp1,comp2);
		int points_NbrComp1=comp1.getNb_Points();
		int points_NbrComp2=comp2.getNb_Points();
		Boolean winners_points=(points_NbrComp1==points_NbrComp2+1)||(points_NbrComp1+1==points_NbrComp2);
		assertTrue(winners_points);
	}
	@Test 
	public void addListeners(){
		ArrayList<MatchObserver>mo=this.myCompetition.getObservers();
		int list_observersSize=mo.size();
		MatchReminder matchreminder2=new MatchReminder();
		this.myCompetition.setmR(matchreminder2);
		assertEquals(matchreminder2.getMatchObservers().size(),0);
		this.myCompetition.addListeners();
		assertEquals(matchreminder2.getMatchObservers().size(),list_observersSize);
		
	}
	
	
	
	


}