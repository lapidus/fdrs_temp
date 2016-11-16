
import React from 'react';
import BreadCrumbs from '../Breadcrumbs';

class Acknowledgements extends React.Component {
  render() {
    return (
      <div>
        <div className='clearfix bg-primary-dark'>
          <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1'>
            <BreadCrumbs chapter={{title: 'Acknowledgements'}} language={this.props.language}/>
          </div>
        </div>

        <div className='clearfix bg-primary pt1'>
          <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3'>
            <h2 className='display-2'>Acknowledgements</h2>
          </div>
        </div>

        <div className='clearfix bg-dark'>
          <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
            <p className='lead'>This is a Federation-wide report made possible by the valued contributions of all 190 National Red Cross and Red Crescent Societies to the Federation-wide Databank and Reporting System under the framework of Strategy 2020. The additional programming information and analysis provided by the departments and regions of the IFRC secretariat and Red Cross and Red Crescent reference centres were also much appreciated.</p>
            <hr />
          </div>
        </div>

        <div className='clearfix body-text' style={{position:'relative'}}>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p><strong>Managing editor and chief data officer:</strong> <a href="mailto:mukulbhola@hotmail.com">Mukul Bhola</a></p>
              <p><strong>Lead author and chief adviser:</strong> Mukesh Kapila</p>

              <p><strong>Contributions and reviews:</strong> Maarten van Aalst, Rania Alerksoussi, Gemina Archer-Davies, Lusine Aslanyan, William Babumba, Carina Bachofen, Ombretta Baggio, Matt Baillie Smith, Inigo Barrena, Elise Baudot, Katrien Beeckman, Arvind Bhardwaj, Aditi Bhola, Tiziana Bonzon, Roger Bracke, Sune Bulow, Olivier van Bunnen, Sebastien Calmus, Terry Carney, Xavier Castellanos, Jagan Chapagain, Michael Chippendale, Chang Hun Choe, Un Yong Choe, Imon Choudhury, Diogo Costa, Walter Cotte, Rebecca Dodd, Aradhna Duggal, Angela Eaton, Simon Eccleshall, Roger Fischli, David Fisher, Julian Fleet, Kate Forbes, Malcolm Fung, Elias Ghanem, Josse Gillijns, Jean-François Goulay, Paul Grierson, Sayed Hashem, Birte Hald, Shaun Hazeldine, Olivia House, Umed Ibodulloev, Maria Jain, Ulrich Jaspers, Marwan Jilani, Leif Jonsson, Karl Julisson, Denise Kappel, Drina Karahasanovic, Robert Kaufman, Ariel Kestens, Tessa Kelly, Pierre Kremer, Geri Lau, Helena Loh, Tiffany Loh, Bayarmaa Luntan, Francisco Maldonado, Eszter Matyeka, Pankaj Mishra, Grant Mitchell, Frank Mohrhauer, Fleur Monasso, Alberto Monguzzi, Jeremy Mortimer, Mohammed Mukhier, Birgitte Olsen, Stephen Omollo, Lisa Pattison, Gabriel Pictet, Mariagiovanna Pietropaolo Bob Pond, Andrew Rizk, Pierre De Rochefort, Graham Saunders, Maya Schaerer, Matthias Schmale, Alasan Senghore, Gurvinder Singh, Veronique Souchet, Elizabeth Soulie, Marcel Stefanik, Sophie Sutrich, Lars Tangen, Joelle Tanguy, Carla Taylor, Robert Tickner, Charlotte Tocchio, Bhupinder Tomar, Miki Tsukamoto, Anitta  Underlin, Natig Veliev, Stephen Wainwright, Monika Wild, Rosaini Yusoff, Giovanni Zambello, Frederic Zanetta</p>

              <p><strong>Data collection and quality assurance:</strong> Karen Badalyan, Kathleen Chiappetta, Esther Elhaddad, Priscila Gonzalez, Nadine Haddad, Sanae Karmass, Chenhao Liu, Jessie Lucien, Nekruz Mamadalizoda, Imre Nagy, Robert Ondrusek, Camila Perera, Giulia Sorbi, Zheng Wang</p>
              <p><strong>Copyediting:</strong> Alison Freebairn</p>
              <p><strong>Print design and layout:</strong> Yann le Floc’h</p>
              <p><strong>Printing:</strong> Deux-Ponts, Manufactures d’Histoires</p>
              <p><strong>FDRS frontend visualisation (<a href='http://www.ifrc.org/data' target='_blank'>www.ifrc.org/data</a>):</strong> Andy Channelle, Sorin Constantinescu, Daniel Lapidus</p>
              <p><strong>FDRS backend maintenance (fdrs.ifrc.org):</strong> Alvaro Alvarez, Edward Happ, Eric Harfield, Vincent Michaud, Charles Mohun</p>
              <p><strong>Website by: </strong><a href='http://www.lapidus.se' target='_blank'>Lapidus Interactive</a></p>
            </div>
          </div>

        </div>


      </div>
    );
  }
}

module.exports = Acknowledgements;
