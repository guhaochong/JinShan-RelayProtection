import{_ as t,c as d,o as r,a}from"./app-BS5HS4Xp.js";const e={},h=a(`<h1 id="_10千伏-k型-标准-信息量表" tabindex="-1"><a class="header-anchor" href="#_10千伏-k型-标准-信息量表"><span>10千伏 K型 标准 信息量表</span></a></h1><blockquote><h2 id="更新日期-2024-03-06" tabindex="-1"><a class="header-anchor" href="#更新日期-2024-03-06"><span><strong>更新日期：2024.03.06</strong></span></a></h2><blockquote><h2 id="文档版本号-24-0-1" tabindex="-1"><a class="header-anchor" href="#文档版本号-24-0-1"><span><strong>文档版本号：24-0-1</strong></span></a></h2></blockquote></blockquote><p>[TOC]</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">📣📣📣 &lt;！--重要提示，请务必阅读--！&gt;**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>点表部分</p><ul><li>遥信点表、遥测点表 点号为 <strong>0</strong> 开始</li><li>遥控点表 点号为 <strong>1</strong> 开始</li></ul></li><li><p>配置部分</p><ul><li>K型开关站 分为 <strong>配变仓</strong> 或 <strong>站变仓</strong> 配置，请根据现场实际情况进⾏配置报警灯部分</li></ul></li><li><p>报警灯部分</p><ul><li>报警灯分2排或4排。2排为灯1~灯16；灯17~灯32既可</li><li>报警灯2~14为触发事故总信</li><li>报警灯4、5、6、7、8、12为保持信号，⼿动复归</li></ul></li></ul><h1 id="遥信点表" tabindex="-1"><a class="header-anchor" href="#遥信点表"><span>遥信点表</span></a></h1><table><thead><tr><th>点号</th><th>信号名称</th><th>信号定义</th><th>序号</th></tr></thead><tbody><tr><td>0</td><td>事故总信号</td><td>合成事故总</td><td>1</td></tr><tr><td>1</td><td>10千伏一段自切未准备</td><td>一段自切保护未准备信号</td><td>2</td></tr><tr><td>2</td><td>10千伏二段自切未准备</td><td>二段自切保护未准备信号</td><td>3</td></tr><tr><td>3</td><td>10千伏分段自切跳一段进线开关</td><td>自切动作后，跳开一号进线开关信号</td><td>4</td></tr><tr><td>4</td><td>10千伏分段自切跳二段进线开关</td><td>自切动作后，跳开二号进线开关信号</td><td>5</td></tr><tr><td>5</td><td>10千伏分段自切合分段开关</td><td>自切动作后，合上分段开关信号</td><td>6</td></tr><tr><td>6</td><td>10千伏分段自切后加速跳分段开关</td><td>自切后加速动作，跳开分段开关信号</td><td>7</td></tr><tr><td>7</td><td>10千伏出线（站配变）保护动作</td><td>出线、配变、站变保护动作信号（前加速、重合闸、过流、零流、间隙、等）</td><td>8</td></tr><tr><td>8</td><td>站内微机装置异常</td><td>全站保护装置故障信号（装置失电、装置异常）</td><td>9</td></tr><tr><td>9</td><td>直流系统故障</td><td>直流装置异常及失电信号</td><td>10</td></tr><tr><td>10</td><td>10千伏站变/配变异常</td><td>当为配变配置为超温、高温信号；当为站变配置则为站变熔丝熔断、站变空开故障</td><td>11</td></tr><tr><td>11</td><td>10千伏进线纵差保护动作</td><td>纵差保护动作信号</td><td>12</td></tr><tr><td>12</td><td>10千伏进线纵差装置异常</td><td>纵差装置异常、通信异常信号</td><td>13</td></tr><tr><td>13</td><td>站内空开故障</td><td>全站空开故障、信开故障信号</td><td>14</td></tr><tr><td>14</td><td>站内微机装置通讯故障</td><td>全站保护装置通讯异常信号</td><td>15</td></tr><tr><td>15</td><td>站用电异常</td><td>站用电失电信号</td><td>16</td></tr><tr><td>16</td><td>10千伏开关弹簧未储能</td><td>全站开关未储能信号</td><td>17</td></tr><tr><td>17</td><td>10千伏开关柜温湿控制器故障</td><td>全站加热器故障信号</td><td>18</td></tr><tr><td>18</td><td>10千伏开关控制回路断线</td><td>全站控制回路断线信号</td><td>19</td></tr><tr><td>19</td><td>10千伏一段进线开关（合）</td><td></td><td>20</td></tr><tr><td>20</td><td>10千伏一段进线开关手车工作位置</td><td></td><td>21</td></tr><tr><td>21</td><td>10千伏一段进线线路接地闸刀 （合）</td><td></td><td>22</td></tr><tr><td>22</td><td>10千伏一段进线遥控开关（远方）</td><td></td><td>23</td></tr><tr><td>23</td><td>10千伏二段进线开关（合）</td><td></td><td>24</td></tr><tr><td>24</td><td>10千伏二段进线开关手车工作位置</td><td></td><td>25</td></tr><tr><td>25</td><td>10千伏二段进线线路接地闸刀 （合）</td><td></td><td>26</td></tr><tr><td>26</td><td>10千伏二段进线遥控开关（远方）</td><td></td><td>27</td></tr><tr><td>27</td><td>10千伏一段压变手车工作位置</td><td></td><td>28</td></tr><tr><td>28</td><td>10千伏一段避雷器手车工作位置</td><td></td><td>29</td></tr><tr><td>29</td><td>10千伏一段中性点接地闸刀</td><td></td><td>30</td></tr><tr><td>30</td><td>10千伏二段压变手车工作位置</td><td></td><td>31</td></tr><tr><td>31</td><td>10千伏二段避雷器手车工作位置</td><td></td><td>32</td></tr><tr><td>32</td><td>10千伏二段中性点接地闸刀</td><td></td><td>33</td></tr><tr><td>33</td><td>10千伏分段开关（合）</td><td></td><td>34</td></tr><tr><td>34</td><td>10千伏分段开关手车工作位置</td><td></td><td>35</td></tr><tr><td>35</td><td>10千伏分段遥控开关（远方）</td><td></td><td>36</td></tr><tr><td>36</td><td>10千伏分段引线柜手车工作位置</td><td></td><td>37</td></tr><tr><td>37</td><td>10千伏分段自切遥控（远方）</td><td></td><td>38</td></tr><tr><td>38</td><td>10千伏一段自切投入（1QK投入/退出）</td><td></td><td>39</td></tr><tr><td>39</td><td>10千伏二段自切投入（2QK投入/退出）</td><td></td><td>40</td></tr><tr><td>40</td><td>10千伏一段自切软压板投入</td><td></td><td>41</td></tr><tr><td>41</td><td>10千伏二段自切软压板投入</td><td></td><td>42</td></tr><tr><td>42</td><td>1号配变/站变10千伏开关（合）</td><td></td><td>43</td></tr><tr><td>43</td><td>1号配变/站变10千伏开关手车工作位置</td><td></td><td>44</td></tr><tr><td>44</td><td>1号配变/站变10千伏接地闸刀 （合）</td><td></td><td>45</td></tr><tr><td>45</td><td>1号配变/站变10千伏遥控开关（远方）</td><td></td><td>46</td></tr><tr><td>46</td><td>2号配变/站变10千伏开关（合）</td><td></td><td>47</td></tr><tr><td>47</td><td>2号配变/站变10千伏开关手车工作位置</td><td></td><td>48</td></tr><tr><td>48</td><td>2号配变/站变10千伏接地闸刀 （合）</td><td></td><td>49</td></tr><tr><td>49</td><td>2号配变/站变10千伏遥控开关（远方）</td><td></td><td>50</td></tr><tr><td>50</td><td>馈01线开关（合）</td><td></td><td>51</td></tr><tr><td>51</td><td>馈01线开关手车工作位置</td><td></td><td>52</td></tr><tr><td>52</td><td>馈01线线路接地闸刀 （合）</td><td></td><td>53</td></tr><tr><td>53</td><td>馈01线遥控开关（远方）</td><td></td><td>54</td></tr><tr><td>54</td><td>馈02线开关（合）</td><td></td><td>55</td></tr><tr><td>55</td><td>馈02线开关手车工作位置</td><td></td><td>56</td></tr><tr><td>56</td><td>馈02线线路接地闸刀 （合）</td><td></td><td>57</td></tr><tr><td>57</td><td>馈02线遥控开关（远方）</td><td></td><td>58</td></tr><tr><td>58</td><td>馈03线开关（合）</td><td></td><td>59</td></tr><tr><td>59</td><td>馈03线开关手车工作位置</td><td></td><td>60</td></tr><tr><td>60</td><td>馈03线线路接地闸刀 （合）</td><td></td><td>61</td></tr><tr><td>61</td><td>馈03线遥控开关（远方）</td><td></td><td>62</td></tr><tr><td>62</td><td>馈04线开关（合）</td><td></td><td>63</td></tr><tr><td>63</td><td>馈04线开关手车工作位置</td><td></td><td>64</td></tr><tr><td>64</td><td>馈04线线路接地闸刀 （合）</td><td></td><td>65</td></tr><tr><td>65</td><td>馈04线遥控开关（远方）</td><td></td><td>66</td></tr><tr><td>66</td><td>馈05线开关（合）</td><td></td><td>67</td></tr><tr><td>67</td><td>馈05线开关手车工作位置</td><td></td><td>68</td></tr><tr><td>68</td><td>馈05线线路接地闸刀 （合）</td><td></td><td>69</td></tr><tr><td>69</td><td>馈05线遥控开关（远方）</td><td></td><td>70</td></tr><tr><td>70</td><td>馈06线开关（合）</td><td></td><td>71</td></tr><tr><td>71</td><td>馈06线开关手车工作位置</td><td></td><td>72</td></tr><tr><td>72</td><td>馈06线线路接地闸刀 （合）</td><td></td><td>73</td></tr><tr><td>73</td><td>馈06线遥控开关（远方）</td><td></td><td>74</td></tr><tr><td>74</td><td>馈07线开关（合）</td><td></td><td>75</td></tr><tr><td>75</td><td>馈07线开关手车工作位置</td><td></td><td>76</td></tr><tr><td>76</td><td>馈07线线路接地闸刀 （合）</td><td></td><td>77</td></tr><tr><td>77</td><td>馈07线遥控开关（远方）</td><td></td><td>78</td></tr><tr><td>78</td><td>馈08线开关（合）</td><td></td><td>79</td></tr><tr><td>79</td><td>馈08线开关手车工作位置</td><td></td><td>80</td></tr><tr><td>80</td><td>馈08线线路接地闸刀 （合）</td><td></td><td>81</td></tr><tr><td>81</td><td>馈08线遥控开关（远方）</td><td></td><td>82</td></tr><tr><td>82</td><td>馈09线开关（合）</td><td></td><td>83</td></tr><tr><td>83</td><td>馈09线开关手车工作位置</td><td></td><td>84</td></tr><tr><td>84</td><td>馈09线线路接地闸刀 （合）</td><td></td><td>85</td></tr><tr><td>85</td><td>馈09线遥控开关（远方）</td><td></td><td>86</td></tr><tr><td>86</td><td>馈10线开关（合）</td><td></td><td>87</td></tr><tr><td>87</td><td>馈10线开关手车工作位置</td><td></td><td>88</td></tr><tr><td>88</td><td>馈10线线路接地闸刀 （合）</td><td></td><td>89</td></tr><tr><td>89</td><td>馈10线遥控开关（远方）</td><td></td><td>90</td></tr><tr><td>90</td><td>馈11线开关（合）</td><td></td><td>91</td></tr><tr><td>91</td><td>馈11线开关手车工作位置</td><td></td><td>92</td></tr><tr><td>92</td><td>馈11线线路接地闸刀 （合）</td><td></td><td>93</td></tr><tr><td>93</td><td>馈11线遥控开关（远方）</td><td></td><td>94</td></tr><tr><td>94</td><td>馈12线开关（合）</td><td></td><td>95</td></tr><tr><td>95</td><td>馈12线开关手车工作位置</td><td></td><td>96</td></tr><tr><td>96</td><td>馈12线线路接地闸刀 （合）</td><td></td><td>97</td></tr><tr><td>97</td><td>馈12线遥控开关（远方）</td><td></td><td>98</td></tr><tr><td>98</td><td>1号站用变成套柜高压侧接地闸刀 （合）</td><td>若为站用变时，使用此配置</td><td>99</td></tr><tr><td>99</td><td>1号站用变成套柜高压侧负荷开关 （合）</td><td>若为站用变时，使用此配置</td><td>100</td></tr><tr><td>100</td><td>2号站用变成套柜高压侧接地闸刀 （合）</td><td>若为站用变时，使用此配置</td><td>101</td></tr><tr><td>101</td><td>2号站用变成套柜高压侧负荷开关 （合）</td><td>若为站用变时，使用此配置</td><td>102</td></tr><tr><td>98</td><td>1号配变380伏开关（合）</td><td>若为配变时，使用此配置</td><td>99</td></tr><tr><td>99</td><td>380伏分段开关（合）</td><td>若为配变时，使用此配置</td><td>100</td></tr><tr><td>100</td><td>2号配变380伏开关（合）</td><td>若为配变时，使用此配置</td><td>101</td></tr></tbody></table><hr><h1 id="遥控点表" tabindex="-1"><a class="header-anchor" href="#遥控点表"><span>遥控点表</span></a></h1><table><thead><tr><th>点号</th><th>信号名称</th><th>信号定义</th><th>序号</th></tr></thead><tbody><tr><td>1</td><td>10千伏一段进线开关</td><td>单点遥控</td><td>1</td></tr><tr><td>2</td><td>10千伏二段进线开关</td><td>单点遥控</td><td>2</td></tr><tr><td>3</td><td>10千伏分段开关</td><td>单点遥控</td><td>3</td></tr><tr><td>4</td><td>10千伏一段自切软压板</td><td>单点遥控</td><td>4</td></tr><tr><td>5</td><td>10千伏二段自切软压板</td><td>单点遥控</td><td>5</td></tr><tr><td>6</td><td>1号配变/站变10千伏开关</td><td>单点遥控</td><td>6</td></tr><tr><td>7</td><td>2号配变/站变10千伏开关</td><td>单点遥控</td><td>7</td></tr><tr><td>8</td><td>馈01线开关</td><td>单点遥控</td><td>8</td></tr><tr><td>9</td><td>馈02线开关</td><td>单点遥控</td><td>9</td></tr><tr><td>10</td><td>馈03线开关</td><td>单点遥控</td><td>10</td></tr><tr><td>11</td><td>馈04线开关</td><td>单点遥控</td><td>11</td></tr><tr><td>12</td><td>馈05线开关</td><td>单点遥控</td><td>12</td></tr><tr><td>13</td><td>馈06线开关</td><td>单点遥控</td><td>13</td></tr><tr><td>14</td><td>馈07线开关</td><td>单点遥控</td><td>14</td></tr><tr><td>15</td><td>馈08线开关</td><td>单点遥控</td><td>15</td></tr><tr><td>16</td><td>馈09线开关</td><td>单点遥控</td><td>16</td></tr><tr><td>17</td><td>馈10线开关</td><td>单点遥控</td><td>17</td></tr><tr><td>18</td><td>馈11线开关</td><td>单点遥控</td><td>18</td></tr><tr><td>19</td><td>馈12线开关</td><td>单点遥控</td><td>19</td></tr></tbody></table><hr><h1 id="遥测点表" tabindex="-1"><a class="header-anchor" href="#遥测点表"><span>遥测点表</span></a></h1><table><thead><tr><th>点号</th><th>信号名称</th><th>信号定义</th><th>序号</th></tr></thead><tbody><tr><td>0</td><td>直流系统控母电压</td><td>直流屏</td><td>1</td></tr><tr><td>1</td><td>10千伏一段母线电压Uab</td><td>压变回路</td><td>2</td></tr><tr><td>2</td><td>10千伏一段母线电压Ubc</td><td></td><td>3</td></tr><tr><td>3</td><td>10千伏一段母线电压Uca</td><td></td><td>4</td></tr><tr><td>4</td><td>10千伏一段母线零序电压3Uo</td><td></td><td>5</td></tr><tr><td>5</td><td>10千伏二段母线电压Uab</td><td>压变回路</td><td>6</td></tr><tr><td>6</td><td>10千伏二段母线电压Ubc</td><td></td><td>7</td></tr><tr><td>7</td><td>10千伏二段母线电压Uca</td><td></td><td>8</td></tr><tr><td>8</td><td>10千伏二段母线零序电压3Uo</td><td></td><td>9</td></tr><tr><td>9</td><td>备用</td><td>备用</td><td>10</td></tr><tr><td>10</td><td>备用</td><td></td><td>11</td></tr><tr><td>11</td><td>备用</td><td></td><td>12</td></tr><tr><td>12</td><td>10kV一段进线B相电流</td><td>进线回路</td><td>13</td></tr><tr><td>13</td><td>10kV一段进线有功（P）</td><td></td><td>14</td></tr><tr><td>14</td><td>10kV二段进线B相电流</td><td></td><td>15</td></tr><tr><td>15</td><td>10kV二段进线有功（P）</td><td></td><td>16</td></tr><tr><td>16</td><td>10kV分段B相电流</td><td>分段回路</td><td>17</td></tr><tr><td>17</td><td>10kV分段有功（P）</td><td></td><td>18</td></tr><tr><td>18</td><td>1号配变10千伏电流（B相）</td><td>配变回路</td><td>19</td></tr><tr><td>19</td><td>1号配变有功（P）</td><td></td><td>20</td></tr><tr><td>20</td><td>2号配变10千伏电流（B相）</td><td></td><td>21</td></tr><tr><td>21</td><td>2号配变有功（P）</td><td></td><td>22</td></tr><tr><td>22</td><td>馈01线电流（B相）</td><td>馈线回路</td><td>23</td></tr><tr><td>23</td><td>馈01线有功（P）</td><td></td><td>24</td></tr><tr><td>24</td><td>馈02线电流（B相）</td><td></td><td>25</td></tr><tr><td>25</td><td>馈02线有功（P）</td><td></td><td>26</td></tr><tr><td>26</td><td>馈03线电流（B相）</td><td></td><td>27</td></tr><tr><td>27</td><td>馈03线有功（P）</td><td></td><td>28</td></tr><tr><td>28</td><td>馈04线电流（B相）</td><td></td><td>29</td></tr><tr><td>29</td><td>馈04线有功（P）</td><td></td><td>30</td></tr><tr><td>30</td><td>馈05线电流（B相）</td><td></td><td>31</td></tr><tr><td>31</td><td>馈05线有功（P）</td><td></td><td>32</td></tr><tr><td>32</td><td>馈06线电流（B相）</td><td></td><td>33</td></tr><tr><td>33</td><td>馈06线有功（P）</td><td></td><td>34</td></tr><tr><td>34</td><td>馈07线电流（B相）</td><td></td><td>35</td></tr><tr><td>35</td><td>馈07线有功（P）</td><td></td><td>36</td></tr><tr><td>36</td><td>馈08线电流（B相）</td><td></td><td>37</td></tr><tr><td>37</td><td>馈08线有功（P）</td><td></td><td>38</td></tr><tr><td>38</td><td>馈09线电流（B相）</td><td></td><td>39</td></tr><tr><td>39</td><td>馈09线有功（P）</td><td></td><td>40</td></tr><tr><td>40</td><td>馈10线电流（B相）</td><td></td><td>41</td></tr><tr><td>41</td><td>馈10线有功（P）</td><td></td><td>42</td></tr><tr><td>42</td><td>馈11线电流（B相）</td><td></td><td>43</td></tr><tr><td>43</td><td>馈11线有功（P）</td><td></td><td>44</td></tr><tr><td>44</td><td>馈12线电流（B相）</td><td></td><td>45</td></tr><tr><td>45</td><td>馈12线有功（P）</td><td></td><td>46</td></tr></tbody></table><hr><h1 id="报警灯配置" tabindex="-1"><a class="header-anchor" href="#报警灯配置"><span>报警灯配置</span></a></h1><table><thead><tr><th>灯号</th><th>灯排</th><th>铭牌</th><th>报警灯定义</th></tr></thead><tbody><tr><td>1</td><td>第一排</td><td>事故总</td><td>报警灯2~灯14合成为事故总信</td></tr><tr><td>2</td><td>第一排</td><td>一段自切未准备</td><td>一段自切保护未准备信号</td></tr><tr><td>3</td><td>第一排</td><td>二段自切未准备</td><td>二段自切保护未准备信号</td></tr><tr><td>4</td><td>第一排</td><td>自切跳一号进线</td><td>自切动作后，跳开一号进线开关信号</td></tr><tr><td>5</td><td>第一排</td><td>自切跳二号进线</td><td>自切动作后，跳开二号进线开关信号</td></tr><tr><td>6</td><td>第一排</td><td>自切合分段</td><td>自切动作后，合上分段开关信号</td></tr><tr><td>7</td><td>第一排</td><td>自切后跳分段</td><td>自切后加速动作，跳开分段开关信号</td></tr><tr><td>8</td><td>第一排</td><td>保护动作</td><td>出线、配变、站变保护动作信号（前加速、重合闸、过流、零流、间隙、等）</td></tr><tr><td>9</td><td>第二排</td><td>保护装置故障</td><td>全站保护装置故障信号（装置失电、装置异常）</td></tr><tr><td>10</td><td>第二排</td><td>直流故障</td><td>直流装置异常及失电信号</td></tr><tr><td>11</td><td>第二排</td><td>配变温度高/站变异常</td><td>当为配变配置为超温、高温信号；当为站变配置则为站变熔丝熔断、站变空开故障</td></tr><tr><td>12</td><td>第二排</td><td>纵差动作</td><td>纵差保护动作信号</td></tr><tr><td>13</td><td>第二排</td><td>纵差异常</td><td>纵差装置异常、通信异常信号</td></tr><tr><td>14</td><td>第二排</td><td>站用电失电</td><td>站用电失电信号</td></tr><tr><td>15</td><td>第二排</td><td>备用</td><td>备用</td></tr><tr><td>16</td><td>第二排</td><td>备用</td><td>备用</td></tr><tr><td>17</td><td>第三排</td><td>空开故障</td><td>全站空开故障、信开故障信号</td></tr><tr><td>18</td><td>第三排</td><td>保护装置通讯异常</td><td>全站保护装置通讯异常信号</td></tr><tr><td>19</td><td>第三排</td><td>弹簧未储能</td><td>全站开关未储能信号</td></tr><tr><td>20</td><td>第三排</td><td>加热器故障</td><td>全站加热器故障信号</td></tr><tr><td>21</td><td>第三排</td><td>控回断线</td><td>全站控制回路断线信号</td></tr><tr><td>22</td><td>第三排</td><td>备用</td><td>备用</td></tr><tr><td>23</td><td>第三排</td><td>备用</td><td>备用</td></tr><tr><td>24</td><td>第三排</td><td>备用</td><td>备用</td></tr><tr><td>25</td><td>第四排</td><td>1号进/2号进/分段异常</td><td>仅包含1号进线、2号进线、分段自切、分段测控装置的空开、通讯、储能、加热器、控回异常信号</td></tr><tr><td>26</td><td>第四排</td><td>1号配变/2号配变异常</td><td>仅包含1号站配变、2号站配变装置的空开、通讯、储能、加热器、控回异常信号</td></tr><tr><td>27</td><td>第四排</td><td>（X）1/（X）2异常</td><td>仅包含馈线1、馈线2装置的空开、通讯、储能、加热器、控回异常信号。（X）为出线名称简称。</td></tr><tr><td>28</td><td>第四排</td><td>（X）3/（X）4异常</td><td>仅包含馈线3、馈线4装置的空开、通讯、储能、加热器、控回异常信号。（X）为出线名称简称。</td></tr><tr><td>29</td><td>第四排</td><td>（X）5/（X）6异常</td><td>仅包含馈线5、馈线6装置的空开、通讯、储能、加热器、控回异常信号。（X）为出线名称简称。</td></tr><tr><td>30</td><td>第四排</td><td>（X）7/（X）8异常</td><td>仅包含馈线7、馈线8装置的空开、通讯、储能、加热器、控回异常信号。（X）为出线名称简称。</td></tr><tr><td>31</td><td>第四排</td><td>（X）9/（X）10异常</td><td>仅包含馈线9、馈线10装置的空开、通讯、储能、加热器、控回异常信号。（X）为出线名称简称。</td></tr><tr><td>32</td><td>第四排</td><td>（X）11/（X）12异常</td><td>仅包含馈线11、馈线12装置的空开、通讯、储能、加热器、控回异常信号。（X）为出线名称简称。</td></tr></tbody></table><hr><hr><h1 id="联系方式" tabindex="-1"><a class="header-anchor" href="#联系方式"><span>联系方式</span></a></h1><hr><blockquote><h3 id="金山继保-内部文件-禁止外传" tabindex="-1"><a class="header-anchor" href="#金山继保-内部文件-禁止外传"><span>金山继保 内部文件，禁止外传</span></a></h3><h3 id="如有疑问-请联系-18918632300-顾" tabindex="-1"><a class="header-anchor" href="#如有疑问-请联系-18918632300-顾"><span>如有疑问，请联系 18918632300 顾</span></a></h3></blockquote><hr>`,22),s=[h];function n(l,i){return r(),d("div",null,s)}const c=t(e,[["render",n],["__file","10千伏 K型 标准 上传调度点表-24-0-1.html.vue"]]),p=JSON.parse('{"path":"/Legacydata/10%E5%8D%83%E4%BC%8F%20K%E5%9E%8B%20%E6%A0%87%E5%87%86%20%E4%B8%8A%E4%BC%A0%E8%B0%83%E5%BA%A6%E7%82%B9%E8%A1%A8-24-0-1.html","title":"10千伏 K型 标准 信息量表","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"Legacydata/10千伏 K型 标准 上传调度点表-24-0-1.md"}');export{c as comp,p as data};
