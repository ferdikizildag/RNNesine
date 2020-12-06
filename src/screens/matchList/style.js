import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    fontSize: 30,
    color: '#0066CC',
    fontWeight: '300',
    backgroundColor: 'red',
  },
  leagueHeader: {
    backgroundColor: '#7d9fa4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  leagueNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  leagueName: {
    backgroundColor: '#7d9fa4',
    color: '#fff',
    fontWeight: '700',
  },
  matchDate: {
    color: '#fff',
  },
  matchName: {
    padding: 10,
    backgroundColor: '#e3ebee',
    color: '#1f4e56',
    fontSize: 14,
    fontWeight: '700',
  },
  ratioTitleContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  ratioTitleItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratioTitleItemText: {
    color: '#6f969c',
    fontSize: 11,
  },
  ratioItem: {
    flex: 1,
    backgroundColor: '#46666c',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  ratioItemSelected: {
    backgroundColor: '#fc0',
  },
  ratioItemText: {
    color: '#fff',
    fontWeight: '700',
  },
  ratioItemTextSelected: {
    color: '#000',
  },
});
