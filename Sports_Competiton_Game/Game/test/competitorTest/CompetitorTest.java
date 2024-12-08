package competitorTest;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import competitor.Competitor;

class CompetitorTest {
	
	@Test
	void getPlayer_NameTest() {
		Competitor p1=new Competitor("Mohamed");
		assertSame(p1.getPlayer_Name(),"Mohamed");
	}
	@Test 
	void getAndsetNb_Points() {
		Competitor p1=new Competitor("ghani");
		assertEquals(p1.getNb_Points(),0);
		p1.setNb_Points(2);
		assertEquals(p1.getNb_Points(),2);
		
	}
	@Test 
	void addPointTest() {
		Competitor p1=new Competitor("luther");
		Competitor p2=new Competitor("malcolm");
		p1.addPoint();
		assertEquals(p1.getNb_Points(),1);
		p1.addPoint();
		p2.setNb_Points(2);
		assertEquals(p1.getNb_Points(),p2.getNb_Points());
	}
	

}
